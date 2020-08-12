import React,{Component} from 'react'

export default function asyncComponent(fn) {
    class Compon extends Component{
        constructor(){
            super();
            this.state={
                C:null
            }
        }
        componentDidMount(){
            fn().then(mod=>{
                this.setState({
                    C:mod.default
                })
            })
        }
        render(){
            const {C}=this.state;
            return(
                <div>
                    {C?<C {...this.props}></C>:null}
                </div>
            )
        }
    }
    return Compon
}
