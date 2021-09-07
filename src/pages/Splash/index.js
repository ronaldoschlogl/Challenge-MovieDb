import React, { useEffect } from 'react'
import { Container, Logo } from './styles';
import logo from '../../assets/splash.png';
const Splash = ({ navigation }) => {
    const handleHome = () => {
        navigation.navigate("Home");
    };

    useEffect(() => {
        setTimeout(()=>{
            handleHome();
        }, 1500);
    }, []);
    return (
        <Container>
            <Logo source={logo}/>
        </Container>
    )
}

export default Splash;
