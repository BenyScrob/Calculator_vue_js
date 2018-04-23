import Vue from 'vue';
const $=require('jquery');
global.$=global.jQuery=$;
require('../scss/main.scss');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');


var jscalculator = new Vue({
    el: '#js-calculator',
    data: {
        expression:"",
        
    },
    
    methods: {

        clickOperation: function(operation) {
            switch (operation) {
                case '=':
                    this.expression=eval(this.expression);
                    break;
                case 'clear':
                    this.expression="";
                    break;
                case 'BackSpace':
                    this.expression = this.expression.slice(0, -1);
                    break;
                case 'X':
                    this.expression=this.parser(this.expression);
                    break;  
             
               
                default:
                    this.expression += operation;
                    break;
            }
        },
        clickNumber: function(number) {
            this.expression +=number;
        },
        parser: function(expression) {
            var array = expression.split("X");
            return array[0]*array[1];
        },
        keydown: function (event) {
            this.clickOperation(event.keydown);
        }

    } 
}); 

