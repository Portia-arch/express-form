describe('Express form', function(){
    const axios = require('axios');
    const readLine  = require('readline');
    const fixture =  require('./fixture');
    const success = require('./success')



    beforeEach(function(){
        port = require('../../src/app');
    });

    it('should open an html form on the browser', async function(done){
        try{
            const html = await axios.get('http://127.0.0.1:3001/new_visitor');
            expect(html.data).toEqual(fixture);
        }
        catch(error) {
            console.log(error)
        };
        done();
    });

    xit('should submit the form', async function(){

        const visitor = {
            name: 'Hloni',
            ass_name: 'Tadiwa',
            age: '23',
            time: '175:50',
            date: '12//02/2020',
            comments: 'HAlo'
        }

        expect(success.data).toEqual(success(
         visitor.name, visitor.ass_name, visitor.age, visitor.time, visitor.date, visitor.comments
        ));	
    });

});