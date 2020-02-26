describe('Express form', function(){
    const axios = require('axios');
    const fixture =  require('./fixture')


    beforeEach(function(){
        port = require('../../src/app');
    });

    // afterEach(function(){
    //     port.close()
    // });

    it('should open an html form on the browser', async function(done){
        try{
            const html = await axios.get('http://127.0.0.1:3001/new_visitor');
            expect(html.data).toEqual(fixture);
        }
        catch(error) {
            console.log(error)
        };
        done()
    });

    xit('should submit the form', async function(){

        expect(res.data).toEqual(success(
            id, visitor.name, visitor.ass_name, visitor.age, visitor.date, visitor.time, visitor.comments
        ));	
    });

});