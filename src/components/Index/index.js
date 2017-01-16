import  React from 'react';
import styles from './index.scss';

export default React.createClass({
    getInitialState(){
        return {
            name: ''
        }
    },
    render(){
        return (<div className={styles.container}>
            <div>
                <img className={styles.image} src={require('statics/images/React.png')} alt="React"/>
            </div>
            <div>
                <span className={styles.title}>Hello React</span>
            </div>
            <div>
                <span>Author:</span>
                <span className={styles.name}>{this.state.name}</span>
            </div>
            <div>
                <input className={styles.author} placeholder="Please type a name of author" onChange={this.onChange}/>
            </div>
        </div>);
    },
    onChange(event){
        this.setState({name: event.target.value});
    }
});