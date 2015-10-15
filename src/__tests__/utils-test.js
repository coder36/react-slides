describe('find_nested_prop', () => {

    it('walks an object graph', () =>
    {
        jest.dontMock('../utils');
        var find_nested_props = require('../utils').find_nested_prop;
        console.log(find_nested_props);
        var res = [];
        var obj = {
            a: {
                href: 'a'
            },
            b: {
                c: {
                    href: 'c'
                }
            },
            href: 'd'
        };

        find_nested_props(obj, 'href', (val, parent)=> {
            res.push(val);
        });

        expect(res).toEqual(['a', 'c', 'd']);
    });

});