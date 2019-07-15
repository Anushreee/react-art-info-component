import React,{Component} from 'react';
import { FaTimesCircle, FaChevronDown} from 'react-icons/fa';
import classes from './Card.module.scss';
import LinesEllipsis from 'react-lines-ellipsis';

class Card extends Component {

    state = {
        showContent: false
    }

    toggleContent = () => {
        this.setState((prevState)=>{
            return {
                showContent: !prevState.showContent
            }
        })       
    }
    
    render(){
        const {art,img,name,info} = this.props.card; 

        return(      
            <React.Fragment>
               
                <article className = {classes.Card}>
                     
                        <figure className = {classes.ImageContent}>
                            <div className={classes.Backdrop}>
                                <span className={classes.CloseBtn} onClick={this.props.removeCard}>
                                    <FaTimesCircle/>    
                                </span>
                            </div>
                            <img src = {img} alt={name} />    
                        </figure>
                        <div className={classes.CardContent}>
                            <h3>{art} </h3>
                            <h4>{name} </h4>
                            <h5>More Info {" "}
                                <span className={classes.ToggleBtn} onClick={this.toggleContent}>
                                    <FaChevronDown/>
                                </span>
                            </h5>
                            
                            {this.state.showContent?
                                <LinesEllipsis maxLine='3'
                                    text={info}
                                    ellipsis='...'
                                    trimRight
                                    basedOn='letters' /> 
                            :null}
                        </div>
                    
                </article>
            </React.Fragment>
        )
    }
}

export default Card;