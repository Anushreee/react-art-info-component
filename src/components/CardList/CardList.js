import React,{Component} from 'react';
import classes from './CardList.module.scss';
import {cardData} from '../../cardData';
import Card from '../Card/Card';

class CardList extends Component {

    state = {
        cards : cardData
    }
   
    removeCardHandler = (id) => {
        const updatedCards = this.state.cards.filter((card)=>{
            return card.id !== id
        })
        this.setState({ 
            cards: updatedCards
        })
    }

    render(){
        let cards = <p>you have deleted all your tours!</p>;

        if(this.state.cards){
            cards = this.state.cards.map(card=>{
                        return <Card
                        key = {card.id} 
                        card={card}
                        removeCard = {()=>this.removeCardHandler(card.id)}/>
                    })
        }
        
        return (
            <section className = {classes.Lists}>
                {cards.length > 0 ? cards:<h2 style={{textAlign:'center'}}>Oops! you have deselected all the cards!</h2>}
                    
            </section>
        )
    }   
}

export default CardList;