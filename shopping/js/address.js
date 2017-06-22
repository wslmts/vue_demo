new Vue({
    el:'#wrap',
    data:{
        title:'settle',
        list:[],
        showCount:3,
        currentIndex:0
    },
    mounted:function(){
        this.getList();
    },
    computed:{
       limitedList:function(){
           return this.list.slice(0,this.showCount)
       }
    },
    methods:{
        getList:function(){
            this.$http.get('./json/address.json').then(function(r){
                this.list=r.body.list;
            });
        }
    }
});
