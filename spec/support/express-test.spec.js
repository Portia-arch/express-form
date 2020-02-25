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

    fit('should submit the form', async function(){

        const visitor = {
            name: 'Nhlanhla',
            assistant: 'Weston',
            age: 43,
            date: '12/07/2021',
            time: '12:34',
            comments: 'hello sucker'

        };

        const res = await axios.post('http://127.0.0.1:3000/new_visitor', visitor);

        // let id = res.data.match(/\d+/g)[2];

        expect(res.data).toEqual(success(
            id, visitor.name, visitor.age, visitor.date, visitor.time, visitor.assistant, visitor.comments
        ));	
    });

});