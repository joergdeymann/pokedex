let DB  = {
    "URL": "",
    "BASE_URL": "https://pokeapi.co/api/v2/",
    "PROJECT": "pokemon-form",
    "TABLE": "",
    "OPTIONS": { method: "GET"},

    getPath: function (table) {
        if (table != null) this.TABLE=table;
        let url=this.BASE_URL;
        if (this.PROJECT != null) url+=this.PROJECT;
        
        if (this.TABLE != null) {
            if (this.PROJECT != null ) url += "/";
            url += this.TABLE;
        }
        this.URL=url;
        return url;
    },
    
    set: function(url) {
        setUrl(url);
    },

    setUrl: function(url) {
        this.BASE_URL=url;
        this.PROJECT=null;
        this.TABLE=null;
    },

    setProject: function (project) {
        this.PROJECT=project;
        this.TABLE=null;
    },
    
    setTable: function (table) {
        this.TABLE=table;
    },

    getUrl: function (table=null) {
        return this.getPath(table);
    },

    get: function (table) {
        return this.getPath(table);
    }
}

async function getResponse(table,options) {
    let url=DB.getPath(table);
    let response="";
    try {
        if (options != null) {
            response = await fetch(url,options);
        } else  {
            response = await fetch(url);
        }
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch (error) {
        console.error(error.message);
        return false;
    }
    return false;
} 

async function loadData(table) {
    let options={
        method: "GET",
        header: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    };
    return await getResponse(table,options);
}
 
function getData(table) {
    return loadData(table);
};

async function saveData(table,data = {}) {
    let options=  {
        method: "PUT",
        header: {
            'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify(data)
    };
    return await getResponse(table,options);    
}