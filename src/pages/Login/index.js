import React, {Component, Fragment} from 'react';
import {notification} from "antd";
import BGParticle from '../../utils/BGParticle'
import Loading2 from '../components/Loading2';
import './style.css';
import LoginForm from './components/LoginForm'

const url = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg'

class Login extends Component {
    state = {
        showBox: 'login',   //展示当前表单
        url: '',  //背景图片
        loading:false,
        loading2:false,
    };

    componentDidMount() {
        this.initPage();
    }

    initPage = () =>{
        this.setState({
            loading:true
        });
        this.loadImageAsync(url)
            .then(url=>{
            this.setState({
                loading:false,
                url
            })
        })
            .then(()=>{
                //two thens, in case the state loading is still false and we begin the initialization of the BGParticle
            this.particle = new BGParticle('backgroundBox')
            this.particle.init()
            notification.open({
                message:<ul><li>Username：admin</li><li>Password：admin</li></ul>,
                duration:0,
                className:'login-notification'
            })
        })
    };

    //In case the background loading is too slow
    loadImageAsync (url) {
        return new Promise(function(resolve, reject) {
            const image = new Image();
            image.onload = function() {
                resolve(url);
            };
            image.onerror = function() {
                console.log('Error when loading background picture')
            };
            image.src = url;
        });
    }

    switchShowBox=()=>{

    }

    render() {
        const {showBox,loading} = this.state;

        return (
            <div id='login-page'>
                {
                    loading ?
                        <Fragment>
                            <h3 style={styles.loadingTitle} className='animated bounceInLeft'>Loading</h3>
                            <Loading2/>
                        </Fragment>:
                        <div className={'container'}>
                            <div id='backgroundBox' style={styles.backgroundBox}/>
                            <div className='container'>
                                <LoginForm
                                    className={showBox === 'login' ? 'box showBox' : 'box hiddenBox'}
                                    switchShowBox={this.switchShowBox}/>
                            </div>
                        </div>


                }
            </div>

        );
    }
}

const styles = {
    backgroundBox: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583585131890&di=d83981ab112375e32e8fe9debcd21c9c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F59b6244ca9bef.jpg)',
        backgroundSize: '100% 100%',
        transition:'all .5s'
    },
    focus: {
        // transform: 'scale(0.7)',
        width: '20px',
        opacity: 1
    },
    loadingBox:{
        position:'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    },
    loadingTitle:{
        position:'fixed',
        top:'50%',
        left:'50%',
        marginLeft: -45,
        marginTop: -18,
        color:'#000',
        fontWeight:500,
        fontSize:24
    },
}

export default Login;
