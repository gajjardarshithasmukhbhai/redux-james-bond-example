import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import {createStore} from 'redux'
class Reduxlu extends React.Component{
render()
{
	//step:1  reducer:-James bond
	const reducer=function(state,action)
	{
		if(action.type==="attack")
		{
			return action.payload
		}
		if(action.type==="enenmy")
		{
			return action.payload
		}
		return state
	}
	
	//step:2 when enemy arrive so normal person contact the CIA chief
	const store=createStore(reducer,"piece")
	
		//step:4 the after james bond complete task so the output will be appear
	store.subscribe(()=>{
		console.log("gajjar darshit hasmukhbhai",store.getState())
	})

	//step:3 CIA chief give the task
	
	store.dispatch({type:"attack",payload:"Jamesbond please help me"})
	store.dispatch({type:"enenmy",payload:"destroy the enenmy"})
	

	return(
			<div class="redux">
				<h1>cismox owner(product base company)</h1>
			</div>
	);
}
}
export default Reduxlu