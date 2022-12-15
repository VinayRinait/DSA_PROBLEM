const { is } = require("express/lib/request");

class Graph{
    constructor(){
        this.elem=new Map();
        this.vertices=0;
        this.edges=0;
        this.visited={};
        this.q=[];
    }

    //for adding vertex to graph
    addvertex(v){
        this.elem.set(v,[]);
        this.vertices++;
    }

    //for checking that vertex is exist is not
    hasvertex(v){
        return this.elem.has(v);
    }

    //get the values at a vertex
    neighbors(v){
        return this.elem.get(v);
    }

    //update value at a vertex
    updateVertex(v,val){
        return this.elem.set(v,val);
    }
    
    //add an Edge 
    addEdge(v1,v2){
        //graph has v1
        //if not, add v1

        if(!this.hasvertex(v1)){
            this.addvertex(v1);
        }

        //graph has v2
        //if not, add v2

        if(!this.hasvertex(v2)){
            this.addvertex(v2);
        }

        
        //get data of v1
        //push v2,into v1 values
        //update v1 edge

        let val=this.neighbors(v1);
        //check if v2 exists in val
        val[val.length]=v2;
        //if v2 exists in val
        this.updateVertex(v1,val);
        this.edges++;

    }

    //has an edges
    hasEdge(v1,v2) {
        let val=this.neighbors(v1);
        if(val.indexOf(v2)){
            return true;
        }
        else{
            return false;
        }
    }

    //no. of vertices
    noOfVertices() {
        return this.vertices
    }

    //no. of edges
    noOfEdges() {
        return this.edges
    }

    _dfs(v,level=null){
        //base condition 
        if(this.visited[v]===1){
            return
        }
        this.visited[v]=1;

        if(level===null){
            let val=this.neighbors(v);
            val.forEach(a=>{
                console.log(v,"->",a);
                this._dfs(a);
            })
        }

    }

    dfs(v){
        this.visited={};
        this._dfs(v);
    }

    
}
let graph= new Graph();

graph.addEdge(0,2);
graph.addEdge(1,3);
graph.addEdge(2,5);

graph.dfs(0);



