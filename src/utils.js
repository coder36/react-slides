export function find_nested_prop( obj, propName, callback ) {

    for( var key in obj ) {
        var val = obj[key]

        if ( key === propName ) {
            callback(val, obj)
        }
        else if ( typeof val === 'object' ) {
            find_nested_prop( val, propName, callback  )
        }
    }
}

export function loadJson(url, block) {
    fetch("/proxy.json", { headers: {url} }).then(resp => resp.json()).then( (json) => {
        block(json)
    })
}