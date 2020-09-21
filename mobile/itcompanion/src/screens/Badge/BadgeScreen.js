'use strict';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { Image } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
export default function BadgeScreen() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.titreContainer}>
                    <Text style={styles.titre}>
                        IT UNIVERSITY MADAGASCAR
                        Université spécialisé en informatique
                    </Text>
                </View>
                <View style={styles.body}>
                    <View>
                        <Image
                            source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" }}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>
                    <View>
                        <Text>
                            Rasendrahasinarivo
                        </Text>
                        <Text>
                            Herinihaja Sitrakiniaina
                        </Text>
                        <Text>
                            01 mars 1996
                        </Text>
                        <Text>
                            H
                        </Text>
                    </View>
                </View>
                <View style={styles.qrcode}>
                    <QRCode
                        //QR code value
                        value="https://www.ituniversity-mg.com/page/"
                        //size of QR Code
                        size={250}
                        //Color of the QR Code (Optional)
                        color="black"
                        //Background Color of the QR Code (Optional)
                        backgroundColor="white"
                        //Logo of in the center of QR Code (Optional)
                        // logo={{
                        //     url:
                        //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                        // }}
                        //Center Logo size  (Optional)
                        logoSize={30}
                        //Center Logo margin (Optional)
                        logoMargin={2}
                        //Center Logo radius (Optional)
                        logoBorderRadius={15}
                        //Center Logo background (Optional)
                        logoBackgroundColor="yellow"
                    />
                </View>

            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10
    },
    titreContainer: {
        alignItems: 'center',
    },
    titre: {

        fontSize: 30,
        fontStyle: "italic"
    },
    body: {
        display: 'flex',
        flexDirection: 'row'
    },
    qrcode: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        marginTop : 110
    }
});
