import React, { useEffect } from "react";
import { Col, Row } from 'reactstrap';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Parallax from "components/Parallax/Parallax.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import NavPills from "components/NavPills/NavPills.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";

import Collapsible from 'react-collapsible';

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

const container = {
    position: "relative",
    zIndex: "12",
    color: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
};



export default function Series1Info(props) {
    const classes = useStyles();
    const { ...rest } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div style={container}>

            <Parallax filter image={require("assets/img/landing-bg5.jpg").default} style={{
                zIndex: "0", justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>

                <div id="scrollableDiv" style={{
                    height: "90vh", width: "100%", overflow: "auto", zIndex: "12",
                    color: "#FFFFFF", padding: '40px', justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'

                }}>

                    <Card>
                        <CardHeader className={classes.cardHeader} style={{
                            background: 'black',
                            color: 'white'

                        }}>
                            <h2 className={classes.title}>SERIES 1 - PLANETS</h2>
                            <br></br>
                            <h3 className={classes.description}>Creation & Rarity</h3>
                        </CardHeader>

                        <Row>


                            <CardBody>
                                <Collapsible trigger="Contents" open="true">
                                    <p>
                                        Our planet NFTs consist of Overlays, Spheres, Suns, Aliens and Moons.
                                        <br></br>
                                        There are 11 overlays to choose from with earth being the most rare.
                                        <br></br>
                                        <br></br>
                                        Below is a list of all overlays and the number of times that overlay was used during the creation of a planet.
                                        <br></br>
                                        <br></br>
                                        Earth Overlay	1
                                        <br></br>
                                        Marble Overlay	50
                                        <br></br>
                                        Flare Overlay	95
                                        <br></br>
                                        Base Overlay	99
                                        <br></br>
                                        Dead Overlay	537
                                        <br></br>
                                        Wavy Overlay	564
                                        <br></br>
                                        Melting Overlay	654
                                        <br></br>
                                        Haze Overlay	700
                                        <br></br>
                                        Cross Overlay	762
                                        <br></br>
                                        Static Overlay	768
                                        <br></br>
                                        Slash Overlay	770
                                        <br></br>
                                    </p>
                                </Collapsible>
                            </CardBody>

                            <CardBody>
                                <Collapsible trigger="Creation">
                                    <p>
                                        Each planet starts life as a blank sphere. There are 100 spheres to choose from.
                                        <br></br>
                                        Below is a list of all base spheres and the number of times that sphere was used during the creation of a planet.
                                        <br></br>
                                        <br></br>
                                        Earth Sphere	1
                                        <br></br>
                                        Sajerae Sphere	31
                                        <br></br>
                                        Xefiqi Sphere	36
                                        <br></br>
                                        Xutaky Sphere	38
                                        <br></br>
                                        Weshosae Sphere	39
                                        <br></br>
                                        Cehytae Sphere	40
                                        <br></br>
                                        Fopupu Sphere	41
                                        <br></br>
                                        Kirige Sphere	41
                                        <br></br>
                                        Wicita Sphere	42
                                        <br></br>
                                        Wumada Sphere	42
                                        <br></br>
                                        Dumybae Sphere	42
                                        <br></br>
                                        Gehema Sphere	42
                                        <br></br>
                                        Shararo Sphere	43
                                        <br></br>
                                        Zhihonae Sphere	43
                                        <br></br>
                                        Shetyjo Sphere	44
                                        <br></br>
                                        Vogyto Sphere	44
                                        <br></br>
                                        Havikae Sphere	45
                                        <br></br>
                                        Marowe Sphere	45
                                        <br></br>
                                        Hovumae Sphere	45
                                        <br></br>
                                        Setoxo Sphere	45
                                        <br></br>
                                        Ruleru Sphere	45
                                        <br></br>
                                        Fupipe Sphere	46
                                        <br></br>
                                        Qukyzhe Sphere	46
                                        <br></br>
                                        Tukaega Sphere	46
                                        <br></br>
                                        Baewufa Sphere	46
                                        <br></br>
                                        Pyzhyvae Sphere	46
                                        <br></br>
                                        Kekaera Sphere	47
                                        <br></br>
                                        Shadaelo Sphere	47
                                        <br></br>
                                        Mudaci Sphere	47
                                        <br></br>
                                        Laeshico Sphere	47
                                        <br></br>
                                        Beshaeco Sphere	48
                                        <br></br>
                                        Lidepe Sphere	48
                                        <br></br>
                                        Rogisa Sphere	48
                                        <br></br>
                                        Gunasa Sphere	48
                                        <br></br>
                                        Ganove Sphere	49
                                        <br></br>
                                        Fewyxa Sphere	49
                                        <br></br>
                                        Maevumo Sphere	49
                                        <br></br>
                                        Gopushi Sphere	49
                                        <br></br>
                                        Lalono Sphere	49
                                        <br></br>
                                        Laefora Sphere	49
                                        <br></br>
                                        Raeposhae Sphere 49
                                        <br></br>
                                        Rakoxe Sphere	49
                                        <br></br>
                                        Dyfawi Sphere	49
                                        <br></br>
                                        Cegodae Sphere	49
                                        <br></br>
                                        Seqaha Sphere	49
                                        <br></br>
                                        Pyshexy Sphere	49
                                        <br></br>
                                        Lylolu Sphere	49
                                        <br></br>
                                        Huwino Sphere	50
                                        <br></br>
                                        Wuxaejae Sphere	50
                                        <br></br>
                                        Tamude Sphere	50
                                        <br></br>
                                        Tefaeqo Sphere	51
                                        <br></br>
                                        Pyzholu Sphere	51
                                        <br></br>
                                        Lekidi Sphere	51
                                        <br></br>
                                        Wohyxy Sphere	51
                                        <br></br>
                                        Pewote Sphere	51
                                        <br></br>
                                        Bimacu Sphere	51
                                        <br></br>
                                        Zhaehozhy Sphere	51
                                        <br></br>
                                        Waekala Sphere	51
                                        <br></br>
                                        Waevozho Sphere	51
                                        <br></br>
                                        Gafoco Sphere	52
                                        <br></br>
                                        Tepyqa Sphere	52
                                        <br></br>
                                        Zhaqaebe Sphere	52
                                        <br></br>
                                        Gebyqe Sphere	52
                                        <br></br>
                                        Zhoreda Sphere	52
                                        <br></br>
                                        Vyxaepy Sphere	52
                                        <br></br>
                                        Kaceva Sphere	52
                                        <br></br>
                                        Zhaejofu Sphere	53
                                        <br></br>
                                        Dyxygo Sphere	53
                                        <br></br>
                                        Kexali Sphere	53
                                        <br></br>
                                        Lukaeda Sphere	53
                                        <br></br>
                                        Rishiwu Sphere	53
                                        <br></br>
                                        Wupyshe Sphere	54
                                        <br></br>
                                        Daeracy Sphere	54
                                        <br></br>
                                        Wuraesho Sphere	54
                                        <br></br>
                                        Xuwere Sphere	54
                                        <br></br>
                                        Liwaeka Sphere	54
                                        <br></br>
                                        Fenole Sphere	54
                                        <br></br>
                                        Mivona Sphere	54
                                        <br></br>
                                        Laedaege Sphere	54
                                        <br></br>
                                        Vaeshajae Sphere	54
                                        <br></br>
                                        Tehaxu Sphere	54
                                        <br></br>
                                        Cimune Sphere	55
                                        <br></br>
                                        Taelaeku Sphere	56
                                        <br></br>
                                        Shecole Sphere	56
                                        <br></br>
                                        Laelaema Sphere	57
                                        <br></br>
                                        Gaehyjy Sphere	57
                                        <br></br>
                                        Vudocu Sphere	58
                                        <br></br>
                                        Mememe Sphere	59
                                        <br></br>
                                        Lyzhewu Sphere	59
                                        <br></br>
                                        Gucihe Sphere	60
                                        <br></br>
                                        Mipashu Sphere	60
                                        <br></br>
                                        Qorisy Sphere	60
                                        <br></br>
                                        Fuxilae Sphere	60
                                        <br></br>
                                        Wawixi Sphere	61
                                        <br></br>
                                        Zhyjaely Sphere	61
                                        <br></br>
                                        Daebaezho Sphere	61
                                        <br></br>
                                        Kyzhuka Sphere	63
                                        <br></br>
                                        Huqulu Sphere	65
                                        <br></br>
                                        Xazhemo Sphere	66
                                        <br></br>
                                        Foleshe Sphere	67
                                    </p>
                                </Collapsible>
                            </CardBody>


                            <CardBody>
                                <Collapsible trigger="Suns">
                                    <p>
                                        Each planet has 0 to 1 Cardano suns. There are 11 suns to choose from.
                                        <br></br>
                                        Below is a list of all suns and the number of times that sun was used during the creation of a planet.
                                        <br></br>
                                        <br></br>
                                        Retae Sun	416
                                        <br></br>
                                        Bimo Sun	421
                                        <br></br>
                                        Rifi Sun	423
                                        <br></br>
                                        Posho Sun	432
                                        <br></br>
                                        Ledy Sun	437
                                        <br></br>
                                        Naeshu Sun	442
                                        <br></br>
                                        Dilo Sun	452
                                        <br></br>
                                        Lukae Sun	468
                                        <br></br>
                                        Qaere Sun	472
                                        <br></br>
                                        Sizhae Sun	475
                                        <br></br>
                                        Shaeqy Sun	490
                                        <br></br>
                                    </p>
                                </Collapsible>
                            </CardBody>
                            <CardBody>
                                <Collapsible trigger="Alien">
                                    <p>
                                        Each planet has 0 to 1 aliens.There are 15 total aliens to choose from.
                                        <br></br>
                                        Below is a list of all aliens and the number of times that alien was used during the creation of a planet.
                                        <br></br>
                                        <br></br>
                                        Gogo Alien	284
                                        <br></br>
                                        Naegae Alien	303
                                        <br></br>
                                        Luro Alien	312
                                        <br></br>
                                        Locae Alien	325
                                        <br></br>
                                        Fezhi Alien	326
                                        <br></br>
                                        Nuqo Alien	327
                                        <br></br>
                                        Zhepu Alien	330
                                        <br></br>
                                        Faejy Alien	332
                                        <br></br>
                                        Kole Alien	334
                                        <br></br>
                                        Jolae Alien	334
                                        <br></br>
                                        Byry Alien	335
                                        <br></br>
                                        Pile Alien	339
                                        <br></br>
                                        Tyxe Alien	340
                                        <br></br>
                                        Waebu Alien	342
                                        <br></br>
                                        Bubi Alien	365
                                    </p>
                                </Collapsible>
                            </CardBody>
                            <CardBody>
                                <Collapsible trigger="Moons">
                                    <p>
                                    <br></br>
                                        Each planet has 0 to 3 moons. 
                                        and there are 74 total moons to choose from. 
                                        <br/>
                                        Moons can appear across multiple planets. 
                                        <br/>
                                        Moons can also share names and there are also "evil twins" where a moon is identical to another moon but 
                                        has a different name.
                                        <br></br>
                                        Only the total number of moons that a planet has is used to calculate rarity with 3 moons being the most rare.
                                        <br></br>
                                        In rare cases, a moon may be hidden behind another moon if they where drawn at the same x, y position.
                                        <br></br>
                                        If your NFT lists more moons than you see orbiting the planet, then this is the case.
                                        <br></br>
                                        Below is a list of moon counts and the total number of times they appear across all planets. 
                                        <br></br>
                                        <br/>
                                        
                                        3 Moons	513<br></br>
                                        2 Moons	1325<br></br>
                                        1 Moons	1499<br></br>
                                        0 Moons	1663<br></br>

                                        <br></br>
                                        Below is a list of all moons and the number of times that moon was used during the creation of a planet.
                                        <br></br>
                                        <br/>
                                        Daekugo Moon	1<br></br>
                                        Bishyle Moon	1<br></br>
                                        Pesoqe Moon	1<br></br>
                                        Jodaqu Moon	1<br></br>
                                        Bahoti Moon	1<br></br>
                                        Nolaeshe Moon	1<br></br>
                                        Zhulaely Moon	1<br></br>
                                        Xujorae Moon	1<br></br>
                                        Fevifo Moon	1<br></br>
                                        Shypimo Moon	1<br></br>
                                        Zhaeshilo Moon	1<br></br>
                                        Hisaechu Moon	1<br></br>
                                        Lishaehae Moon	1<br></br>
                                        Lalyzhe Moon	1<br></br>
                                        Pafilae Moon	1<br></br>
                                        Wulaeshu Moon	1<br></br>
                                        Lotalo Moon	1<br></br>
                                        Juwuko Moon	1<br></br>
                                        Zhaelizhy Moon	1<br></br>
                                        Raetishu Moon	1<br></br>
                                        Cejaelae Moon	1<br></br>
                                        Dugaene Moon	1<br></br>
                                        Xexuche Moon	1<br></br>
                                        Xosuno Moon	1<br></br>
                                        Gaenozhae Moon	1<br></br>
                                        Sosishy Moon	1<br></br>
                                        Fuxuzhe Moon	1<br></br>
                                        Cylixe Moon	1<br></br>
                                        Mogoha Moon	1<br></br>
                                        Qybaequ Moon	1<br></br>
                                        Nuwehe Moon	1<br></br>
                                        Xajudae Moon	1<br></br>
                                        Qasilae Moon	1<br></br>
                                        Nikiba Moon	1<br></br>
                                        Nanijae Moon	1<br></br>
                                        Chychowo Moon	1<br></br>
                                        Saebashy Moon	1<br></br>
                                        Kykyky Moon	1<br></br>
                                        Jihoqy Moon	1<br></br>
                                        Rytaelae Moon	1<br></br>
                                        Chechani Moon	1<br></br>
                                        Cedevae Moon	1<br></br>
                                        Richocy Moon	1<br></br>
                                        Nosaesho Moon	1<br></br>
                                        Fatibe Moon	1<br></br>
                                        Fyxunu Moon	1<br></br>
                                        Huvule Moon	1<br></br>
                                        Lawovy Moon	1<br></br>
                                        Kochozhae Moon	1<br></br>
                                        Lalapy Moon	1<br></br>
                                        Shuqaesi Moon	1<br></br>
                                        Joloca Moon	1<br></br>
                                        Fejula Moon	1<br></br>
                                        Rolini Moon	1<br></br>
                                        Bokumy Moon	1<br></br>
                                        Favuku Moon	1<br></br>
                                        Jygumi Moon	1<br></br>
                                        Kajeny Moon	1<br></br>
                                        Bonaela Moon	1<br></br>
                                        Joruwa Moon	1<br></br>
                                        Hutatu Moon	1<br></br>
                                        Tazharae Moon	1<br></br>
                                        Saeqaci Moon	1<br></br>
                                        Hilyvi Moon	1<br></br>
                                        Lataezhe Moon	1<br></br>
                                        Kishaelae Moon	1<br></br>
                                        Kelybo Moon	1<br></br>
                                        Kymaeju Moon	1<br></br>
                                        Dirusu Moon	1<br></br>
                                        Hurana Moon	1<br></br>
                                        Gilodi Moon	1<br></br>
                                        Baechaewu Moon	1<br></br>
                                        Labiqo Moon	1<br></br>
                                        Naeqecy Moon	1<br></br>
                                        Xudopi Moon	1<br></br>
                                        Biwede Moon	1<br></br>
                                        Tycumu Moon	1<br></br>
                                        Wakomi Moon	1<br></br>
                                        Jaexamy Moon	1<br></br>
                                        Bygaeta Moon	1<br></br>
                                        Hukyhae Moon	1<br></br>
                                        Hyqele Moon	1<br></br>
                                        Feqibu Moon	1<br></br>
                                        Lepezho Moon	1<br></br>
                                        Pawojo Moon	1<br></br>
                                        Chaelybu Moon	1<br></br>
                                        Dojaeva Moon	1<br></br>
                                        Bosyzha Moon	1<br></br>
                                        Gaelaju Moon	1<br></br>
                                        Cigaeqi Moon	1<br></br>
                                        Syjycy Moon	1<br></br>
                                        Qaeliji Moon	1<br></br>
                                        Simury Moon	1<br></br>
                                        Churaxu Moon	1<br></br>
                                        Lohito Moon	1<br></br>
                                        Saejady Moon	1<br></br>
                                        Tocomi Moon	1<br></br>
                                        Shigyko Moon	1<br></br>
                                        Gihaezhe Moon	1<br></br>
                                        Lalige Moon	1<br></br>
                                        Pipozhae Moon	1<br></br>
                                        Xamaejae Moon	1<br></br>
                                        Jarochu Moon	1<br></br>
                                        Nykeli Moon	1<br></br>
                                        Myzhoti Moon	1<br></br>
                                        Nodacy Moon	1<br></br>
                                        Jedacha Moon	1<br></br>
                                        Jufoma Moon	1<br></br>
                                        Weshelae Moon	1<br></br>
                                        Pakelae Moon	1<br></br>
                                        Lasewy Moon	1<br></br>
                                        Kuvino Moon	1<br></br>
                                        Wiqyku Moon	1<br></br>
                                        Qatylae Moon	1<br></br>
                                        Ryjila Moon	1<br></br>
                                        Vuboho Moon	1<br></br>
                                        Loxeki Moon	1<br></br>
                                        Toqoci Moon	1<br></br>
                                        Zhazhopa Moon	1<br></br>
                                        Lipyzhu Moon	1<br></br>
                                        Kihyno Moon	1<br></br>
                                        Shytugae Moon	1<br></br>
                                        Rocharo Moon	1<br></br>
                                        Sadyzhi Moon	1<br></br>
                                        Bowaecho Moon	1<br></br>
                                        Tachani Moon	1<br></br>
                                        Rafuzhae Moon	1<br></br>
                                        Mazhaby Moon	1<br></br>
                                        Toxozhe Moon	1<br></br>
                                        Raexaewae Moon	1<br></br>
                                        Chymudo Moon	1<br></br>
                                        Shyxagy Moon	1<br></br>
                                        Tylaefa Moon	1<br></br>
                                        Daesavae Moon	1<br></br>
                                        Xychusho Moon	1<br></br>
                                        Legiby Moon	1<br></br>
                                        Raefyka Moon	1<br></br>
                                        Duliva Moon	1<br></br>
                                        Nabaca Moon	1<br></br>
                                        Haxochi Moon	1<br></br>
                                        Dywapu Moon	1<br></br>
                                        Talopae Moon	1<br></br>
                                        Cowecy Moon	1<br></br>
                                        Shaewovy Moon	1<br></br>
                                        Chocosho Moon	1<br></br>
                                        Pazhufae Moon	1<br></br>
                                        Lacise Moon	1<br></br>
                                        Gybishu Moon	1<br></br>
                                        Kavochae Moon	1<br></br>
                                        Genevae Moon	1<br></br>
                                        Xibewe Moon	1<br></br>
                                        Chashilae Moon	1<br></br>
                                        Qifiki Moon	1<br></br>
                                        Qoxaxe Moon	1<br></br>
                                        Hyrytae Moon	1<br></br>
                                        Vazhuju Moon	1<br></br>
                                        Linilae Moon	1<br></br>
                                        Fefaequ Moon	1<br></br>
                                        Betifo Moon	1<br></br>
                                        Qejuva Moon	1<br></br>
                                        Zhilazho Moon	1<br></br>
                                        Tipaxy Moon	1<br></br>
                                        Xaecaechae Moon	1<br></br>
                                        Haeqydo Moon	1<br></br>
                                        Laesheti Moon	1<br></br>
                                        Fichila Moon	1<br></br>
                                        Gukaehu Moon	1<br></br>
                                        Viruqi Moon	1<br></br>
                                        Wogupae Moon	1<br></br>
                                        Kulaepy Moon	1<br></br>
                                        Kirefe Moon	1<br></br>
                                        Laecomo Moon	1<br></br>
                                        Lajava Moon	1<br></br>
                                        Chukaeli Moon	1<br></br>
                                        Chepipo Moon	1<br></br>
                                        Maedaqo Moon	1<br></br>
                                        Mysuzhe Moon	1<br></br>
                                        Gaecheja Moon	1<br></br>
                                        Xaeluke Moon	1<br></br>
                                        Myhichy Moon	1<br></br>
                                        Gexygae Moon	1<br></br>
                                        Caecuca Moon	1<br></br>
                                        Zhowoci Moon	1<br></br>
                                        Kewytae Moon	1<br></br>
                                        Chomonu Moon	1<br></br>
                                        Negutu Moon	1<br></br>
                                        Kalaka Moon	1<br></br>
                                        Biruto Moon	1<br></br>
                                        Qezhere Moon	1<br></br>
                                        Devoje Moon	1<br></br>
                                        Bykuxy Moon	1<br></br>
                                        Zhaejapa Moon	1<br></br>
                                        Fixizhae Moon	1<br></br>
                                        Syrasi Moon	1<br></br>
                                        Vaelelo Moon	1<br></br>
                                        Damugae Moon	1<br></br>
                                        Pasaeri Moon	1<br></br>
                                        Katinu Moon	1<br></br>
                                        Bypehe Moon	1<br></br>
                                        Waelaefe Moon	1<br></br>
                                        Chadili Moon	1<br></br>
                                        Qasara Moon	1<br></br>
                                        Lashaeno Moon	1<br></br>
                                        Kariru Moon	1<br></br>
                                        Gysodo Moon	1<br></br>
                                        Laefoxo Moon	1<br></br>
                                        Sicila Moon	1<br></br>
                                        Folegae Moon	1<br></br>
                                        Laebaezhu Moon	1<br></br>
                                        Famowi Moon	1<br></br>
                                        Chidihe Moon	1<br></br>
                                        Dewiny Moon	1<br></br>
                                        Xojoqu Moon	1<br></br>
                                        Chizhajo Moon	1<br></br>
                                        Qafaega Moon	1<br></br>
                                        Fuweta Moon	1<br></br>
                                        Toshudy Moon	1<br></br>
                                        Vetedy Moon	1<br></br>
                                        Shulusha Moon	1<br></br>
                                        Xymulu Moon	1<br></br>
                                        Wacexa Moon	1<br></br>
                                        Shilolo Moon	1<br></br>
                                        Chaelosu Moon	1<br></br>
                                        Vilaepa Moon	1<br></br>
                                        Subeku Moon	1<br></br>
                                        Xyxusae Moon	1<br></br>
                                        Dyxaehu Moon	1<br></br>
                                        Laraky Moon	1<br></br>
                                        Zhavogu Moon	1<br></br>
                                        Vygila Moon	1<br></br>
                                        Semapa Moon	1<br></br>
                                        Chaebimy Moon	1<br></br>
                                        Tytezhi Moon	1<br></br>
                                        Pasyzhae Moon	1<br></br>
                                        Jetaka Moon	1<br></br>
                                        Kaepaezho Moon	1<br></br>
                                        Chaexaesae Moon	1<br></br>
                                        Telaenu Moon	1<br></br>
                                        Rokuhu Moon	1<br></br>
                                        Gamazho Moon	1<br></br>
                                        Jetyjo Moon	1<br></br>
                                        Jadacho Moon	1<br></br>
                                        Pemuli Moon	1<br></br>
                                        Sufeki Moon	1<br></br>
                                        Piboro Moon	1<br></br>
                                        Taetoxae Moon	1<br></br>
                                        Tachocy Moon	1<br></br>
                                        Xamusa Moon	1<br></br>
                                        Chasaeni Moon	1<br></br>
                                        Wuvydae Moon	1<br></br>
                                        Shupumi Moon	1<br></br>
                                        Jyline Moon	1<br></br>
                                        Bojemu Moon	1<br></br>
                                        Chochaeqi Moon	1<br></br>
                                        Fyqatae Moon	1<br></br>
                                        Zholaebae Moon	1<br></br>
                                        Gedyfi Moon	1<br></br>
                                        Lavixu Moon	1<br></br>
                                        Weciro Moon	1<br></br>
                                        Fynija Moon	1<br></br>
                                        Chaemozha Moon	1<br></br>
                                        Ladamo Moon	1<br></br>
                                        Fychuvi Moon	1<br></br>
                                        Cechyfe Moon	1<br></br>
                                        Susishi Moon	1<br></br>
                                        Maeticha Moon	1<br></br>
                                        Culylo Moon	1<br></br>
                                        Quselae Moon	1<br></br>
                                        Xochexy Moon	1<br></br>
                                        Poqufo Moon	1<br></br>
                                        Gozhoho Moon	1<br></br>
                                        Mimipu Moon	1<br></br>
                                        Loratae Moon	1<br></br>
                                        Bedylu Moon	1<br></br>
                                        Pehybo Moon	1<br></br>
                                        Wydole Moon	1<br></br>
                                        Zhyreja Moon	1<br></br>
                                        Gevofae Moon	1<br></br>
                                        Wuzhobu Moon	1<br></br>
                                        Gaxaexu Moon	1<br></br>
                                        Shisulu Moon	1<br></br>
                                        Nytaesa Moon	1<br></br>
                                        Xyhaeqae Moon	1<br></br>
                                        Taezhiqu Moon	1<br></br>
                                        Soxeru Moon	1<br></br>
                                        Tanovae Moon	1<br></br>
                                        Vyluxae Moon	1<br></br>
                                        Gokuhe Moon	1<br></br>
                                        Doleta Moon	1<br></br>
                                        Jushyxi Moon	1<br></br>
                                        Pyloxae Moon	1<br></br>
                                        Sapoqu Moon	1<br></br>
                                        Shesuvy Moon	1<br></br>
                                        Moluli Moon	1<br></br>
                                        Malufo Moon	1<br></br>
                                        Qacycha Moon	1<br></br>
                                        Zhofozhy Moon	1<br></br>
                                        Hyzhaechy Moon	1<br></br>
                                        Folushae Moon	1<br></br>
                                        Qalinae Moon	1<br></br>
                                        Hawubae Moon	1<br></br>
                                        Chehyvy Moon	2<br></br>
                                        Shycaehe Moon	2<br></br>
                                        Chodole Moon	2<br></br>
                                        Chowoxi Moon	2<br></br>
                                        Wesyshe Moon	2<br></br>
                                        Jebiby Moon	2<br></br>
                                        Datesy Moon	2<br></br>
                                        Faxowa Moon	4<br></br>
                                        Hosefu Moon	40<br></br>
                                        Lecaewy Moon	42<br></br>
                                        Kikole Moon	44<br></br>
                                        Sushobae Moon	44<br></br>
                                        Wenuha Moon	45<br></br>
                                        Kodofi Moon	45<br></br>
                                        Waebape Moon	46<br></br>
                                        Shishaehi Moon	46<br></br>
                                        Lymacu Moon	46<br></br>
                                        Washeba Moon	47<br></br>
                                        Hapujae Moon	47<br></br>
                                        Jeradi Moon	47<br></br>
                                        Tifego Moon	48<br></br>
                                        Tewuxae Moon	48<br></br>
                                        Jojaezhu Moon	48<br></br>
                                        Shubudae Moon	48<br></br>
                                        Qimydu Moon	48<br></br>
                                        Vaenaehy Moon	49<br></br>
                                        Luhedo Moon	49<br></br>
                                        Bovoma Moon	49<br></br>
                                        Jehaele Moon	49<br></br>
                                        Pobivy Moon	50<br></br>
                                        Vijigae Moon	50<br></br>
                                        Xehivy Moon	50<br></br>
                                        Vyfaebi Moon	50<br></br>
                                        Tuhynu Moon	50<br></br>
                                        Webisa Moon	50<br></br>
                                        Bapofo Moon	50<br></br>
                                        Raevupae Moon	51<br></br>
                                        Zhyshugy Moon	51<br></br>
                                        Daxiwae Moon	51<br></br>
                                        Halacu Moon	52<br></br>
                                        Dagoqy Moon	52<br></br>
                                        Jocoxae Moon	52<br></br>
                                        Jofany Moon	52<br></br>
                                        Nyniny Moon	52<br></br>
                                        Cidoshae Moon	52<br></br>
                                        Jafyje Moon	52<br></br>
                                        Naeruky Moon	53<br></br>
                                        Zhelujo Moon	53<br></br>
                                        Baxequ Moon	53<br></br>
                                        Gazhetae Moon	53<br></br>
                                        Pehaso Moon	53<br></br>
                                        Shaexoli Moon	53<br></br>
                                        Riminae Moon	53<br></br>
                                        Logabu Moon	53<br></br>
                                        Lyfeby Moon	54<br></br>
                                        Lyfozhu Moon	54<br></br>
                                        Gaefepu Moon	54<br></br>
                                        Morylu Moon	54<br></br>
                                        Dicipe Moon	55<br></br>
                                        Mesyve Moon	55<br></br>
                                        Qashadu Moon	55<br></br>
                                        Pofishe Moon	55<br></br>
                                        Pimise Moon	55<br></br>
                                        Busufi Moon	55<br></br>
                                        Bitinu Moon	55<br></br>
                                        Juxyja Moon	56<br></br>
                                        Qylala Moon	56<br></br>
                                        Lajyta Moon	56<br></br>
                                        Junaeja Moon	56<br></br>
                                        Ledyry Moon	56<br></br>
                                        Raebuli Moon	56<br></br>
                                        Japaeje Moon	57<br></br>
                                        Hokoma Moon	57<br></br>
                                        Seneho Moon	57<br></br>
                                        Suvoqae Moon	57<br></br>
                                        Muhale Moon	57<br></br>
                                        Lelishu Moon	57<br></br>
                                        Vyhaezhi Moon	57<br></br>
                                        Shenowu Moon	58<br></br>
                                        Mazhorae Moon	58<br></br>
                                        Saekino Moon	59<br></br>
                                        Liqyku Moon	59<br></br>
                                        Rolite Moon	59<br></br>
                                        Waeseha Moon	59<br></br>
                                        Voduja Moon	59<br></br>
                                        Jukovae Moon	60<br></br>
                                        Laediqy Moon	60<br></br>
                                        Lekukae Moon	61<br></br>
                                        Bizhozhae Moon	61<br></br>
                                        Byfivae Moon	61<br></br>
                                        Lybyvo Moon	61<br></br>
                                        Wuxoty Moon	61<br></br>
                                        Hyhaewi Moon	62<br></br>
                                        Pyhesae Moon	62<br></br>
                                        Wekolo Moon	62<br></br>
                                        Baebebi Moon	64<br></br>
                                        Zhigepo Moon	64<br></br>
                                        Nutytu Moon	65<br></br>
                                        Fykyci Moon	65<br></br>
                                        Bulutae Moon	67<br></br>
                                        Rezhyzho Moon	67<br></br>
                                        Gyjurae Moon	68<br></br>
                                        Kytyqu Moon	68<br></br>
                                        Rapafi Moon	69<br></br>
                                        Vatedi Moon	73<br></br>
                                        Wisaku Moon	75<br></br>
                                    </p>
                                </Collapsible>

                            </CardBody>


                        </Row>

                        {/* <CardFooter className={classes.cardFooter}>
                            <Button simple color="primary" size="lg">
                                Get started
                            </Button>
                        </CardFooter> */}
                    </Card>


                </div>
            </Parallax >
        </div >
    );
}
