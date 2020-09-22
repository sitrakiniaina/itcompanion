'use strict';
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { Image } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import { getUser } from '../../utilitaire/SessionUtil';
import Baniere from '../../assets/images/banniere.jpg'
export default function BadgeScreen() {

    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        console.log("miantso useeffect");
        const user = getUser().then((response) => {
            console.log(typeof response)
            setCurrentUser(response);
        });
    }, [])
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image
                        source={Baniere}
                        style={{ width: '100%', height: 120 }}
                    />
                </View>
                {/* <View style={styles.titreContainer}>
                    <Text style={styles.titre}>
                        IT UNIVERSITY MADAGASCAR
                    </Text>
                    <Text style={styles.titre_label}>
                        Université spécialisé en informatique
                    </Text>

                </View> */}
                <View style={styles.body}>
                    <View >
                        <Image
                            source={{ uri: currentUser?.imageUrl ? currentUser.imageUrl : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" }}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>
                    <View style={styles.text_content}>
                        <Text style={{ fontSize: 20, flexWrap: 'wrap', marginTop: 5 }}>
                            {currentUser?.name}
                        </Text>

                        <Text style={{ fontSize: 14, marginTop: 5 }}>
                            01 mars 1996
                        </Text>
                        <Text>
                            Homme
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: '#a3da48', marginTop: 5 }}>
                            Promotion 8 GB
                        </Text>

                    </View>
                </View>
                <View style={styles.qrcode}>
                    <Text style={{ fontWeight: 'bold', color: 'black',fontSize:20,letterSpacing:3}}>
                        ETU00034
                        </Text>
                    <QRCode
                        value="https://www.ituniversity-mg.com/page/"
                        size={200}
                        color="black"
                        backgroundColor="white"
                        logoSize={30}
                        logoMargin={2}
                        logoBorderRadius={15}
                        logoBackgroundColor="yellow"
                    />
                </View>

            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        padding: 10,

        backgroundColor: '#ffffff'
    },
    titreContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    titre: {
        fontSize: 20,
        textAlign: 'center',
        color: '#050505'
    },
    titre_label: {
        fontSize: 14,
    },
    body: {
        //display: 'flex',
        flexDirection: 'row',
        paddingTop: 50,
        // backgroundColor :'black',
        flex: .6


    },
    text_content: {
        // width: '70%',
        padding: 10,
        // backgroundColor :'red',
        flex: 1.5,
        height: 200

    },
    qrcode: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
       // marginTop: 50,
    }
});
