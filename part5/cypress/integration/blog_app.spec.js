describe('Blog App',function(){
    beforeEach(function(){
        cy.request('POST','http://localhost:3001/api/testing/reset');
        cy.request('POST','http://localhost:3001/api/users',{
            username: 'testUsername',name:'testName',password:'testPassword'
        });
        cy.request('POST','http://localhost:3001/api/users',{
            username: 'testUser2',name:'testName2',password:'testPass2'
        });
        cy.visit('http://localhost:3000')
    })

    it('login form is shown',function(){
        cy.get('#login-username')
        cy.get('#login-password')
        cy.get('#login-button')
    })

    describe('login',function(){
        it('succeeds with correct credentials',function(){
            // cy.login({username: 'testUsername',password: 'testPassword'});
            cy.get('#login-username').type('testUsername');
            cy.get('#login-password').type('testPassword');
            cy.get('#login-button').click();
            cy.contains('testName has successfully login')
        });
        it('failed with wrong credentials',function(){
            cy.get('#login-username').type('wrongUsername');
            cy.get('#login-password').type('wrongPassword');
            cy.get("#login-button").click();
            cy.contains('wrong username or password');
            cy.get('.notification').should('have.css','border-color','rgb(255, 0, 0)')
        })
    })

    describe('when logged in',function(){
        beforeEach(function(){
            cy.get('#login-username').type('testUsername');
            cy.get('#login-password').type('testPassword');
            cy.get('#login-button').click();
        })

        it('a blog can be created',function(){
            cy.contains('create').click();
            cy.get('#title').type('testTitle');
            cy.get('#author').type('testAuthor');
            cy.get('#url').type('testUrl.xom');
            cy.get('#new-blog-button').click();
            cy.contains('testTitle')
        })
        describe('a blog already exist',function(){
            beforeEach(function(){
                cy.contains('create').click();
                cy.get('#title').type('title1');
                cy.get('#author').type('author1');
                cy.get('#url').type('url1');
                cy.get('#new-blog-button').click();
            })
            it('a user can like blog',function(){
                cy.get('#view-title1').click();
                cy.get('#like-title1').click();
                cy.get('#blog-title1').contains('likes 1');
            })

            it('the creator can delete the blog',function(){
                cy.get('#view-title1').click();
                cy.get('#remove-title1').click();
                cy.get('html').should('not.contain','title1')
            })
            it('other user cant delete the blog',function(){
                cy.get('#logout-button').click();
                cy.get('#login-username').type('testUser2');
                cy.get('#login-password').type('testPass2');
                cy.get('#login-button').click();
                cy.get('#view-title1').click();
                cy.contains('title1').should('not.contain','remove');
            })
        })
        it("the blogs are ordered according to likes",function(){
            cy.contains('create').click();
            cy.get('#title').type('testTitleOne');
            cy.get('#author').type('testAuthor');
            cy.get('#url').type('testUrl.xom');
            cy.get('#new-blog-button').click();
            cy.get('#view-testTitleOne').click();
            cy.get('#like-testTitleOne').click();
            cy.get('#like-testTitleOne').click();
            cy.get('#like-testTitleOne').click();
            cy.contains('create').click();

            cy.get('#title').clear()
            cy.get('#author').clear()
            cy.get('#url').clear()
            cy.get('#title').type('testTitleTwo');
            cy.get('#author').type('testAuthor');
            cy.get('#url').type('testUrl.xom');
            cy.get('#new-blog-button').click();
            cy.get('#view-testTitleTwo').click();
            cy.get('#like-testTitleTwo').click();
            cy.get('#like-testTitleTwo').click();
            cy.get('#like-testTitleTwo').click();
            cy.get('#like-testTitleTwo').click();
            cy.get('#like-testTitleTwo').click();
            cy.get('#like-testTitleTwo').click();

            cy.reload()
            cy.get('.blog:first').contains('testTitleTwo');
        })
    })
})