var vm=new Vue({
    el:'#wrap',
    data:{
        title:'welcome',
        list:[],
        clickAll:false,
        totalPrice:0
    },
    mounted:function(){
        this.getList();
    },
    methods:{
        getList:function(){
            this.$http.get('./json/list.json').then(function(r){
                this.list=r.body.list;
            });
        },
        getCount:function(item,val){
            item.number=val+item.number;
            if(item.number<0){
                item.number=0;
            }
            this.total();
        },
        checkItem:function(item){
            if(typeof item.checked==='undefined'){
                Vue.set(item,'checked',true);
            }else{
                item.checked=!item.checked;
            }
            var count=0;
            this.list.forEach(function(item,i,ay){
                if( item.checked){
                  count++;
                }
            });
            count==this.list.length?this.clickAll=true:this.clickAll=false;
            this.total();
        },
        checkAll:function(val){
            var self=this;
            this.clickAll=val;
            this.list.forEach(function(item,i,ay){
                if(typeof item.checked==='undefined'){
                    self.$set(item,'checked',true);
                }else{
                    item.checked=val;
                }
            });
            this.total();
        },
        total:function(){
            var self=this;
            self.totalPrice=0;
            this.list.forEach(function(item,i,ay){
                if(item.checked){
                    self.totalPrice+=item.price*item.number;
                }
            });
        },
        deleteItem:function(index){
            var self=this;
            this.list.splice(index,1);
        }
    },
    filters:{
        formatMoney:function(value){
            return value.toFixed(2);
        }
    }
});
Vue.filter('globalFormat',function(value,type){
    return type+value.toFixed(2)+" 元";
});
