import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBjx14lPJHnWGRimZffQqrffUIVt8-FGWwFl4qSfUWpZHjAlNN-Uzm~gaNgT-oQUXelxvjGvid04u3E12BKnHlzngxceDxTiMj7CFcAygXtub8f4~Z4juKjFVFpmcTgKAoxOd7Og4dJFk9lXrASAfLcJVVBBiw9i1OTLpyCH4oOsWTdiRTBt9QKT78u~Ut7JXSBKLdIn2IzNElUhsG~mkis4dwzmrA2d-zEUawyhR~pm-9-Wf7WTupPGvpikQ0qwp4wIhhSYD91AfP3LVrsq8rUJ~LUKUs-Wp~GYd37l6eohEa5ax49uOZrA1aOqgfyTIxx2xAlm0Pqbrir36Gwzlw__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/a70b/2387/3b980a6618ac762aedb38933fa0860a4?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwgJigLvkSe09ufcYviRoPMqOsBsAz-2K-6Ux4WuvHnbRcoarMQAS6xO9fOaeFr0ugTVt~uJNDIpxaWUExhBGNS9mXVhfsUtBk7EOu3wFpwJX1lg8MpGlud5XMuAAK~SfWDHAQagIX~61gAHcanWnXPinTYHATqKzwEbAyx4Ld25ecFYNdQ8KXVB~-fAL6QGMj11DvBbDaxAZYBgUvUKMtwbGUltxGRUZSbWtHmazRWCBI6AVhSoKW-95Oggo9MPWifT3hSHARX5al~VG77x8oUNU2wDHZps9Kz3tdyuuT-jAh9SLAh76uwhEpEtNQ0P0~S~ebilXnPJnbPtLyZWiA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 2</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/27e7/fb4b/c4e919dfff0275543abdfa47f480cce6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NMH3F~1sbeUObb-E~Dx3Xj9GZmlYJ2lUGfHZe9Qnw7EUSeEp~KD8JUIaZtVyC-tY26Zm0--6O922XX6k1~CNwP2-NUCMQXLVwGgmQigPA1vzHMv82OZhY28-WNLkT5OKg7EaSbN2S8SfgNusQPnIvSYg1hkUkMlc3R-8zAPjI8rS-O71wesy6WGO7l1HufiDsMvFaPPHkXVxvLJ~cGTQwjVNYpc7W-55s83fZg6NznKDbDi5VVmJO4EGMM8zqy5Q93cSVwi8mUSwaQL9rFjVnZF90icDwdoqp6PS~PDjTBK64wAlyjo3pMLOCM3BFOpViLMxm49x1VHCYW6gGmfGQA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 3</Text>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/7768/f396/28e8130d48cd115b029fa0cb022605b3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVMba-M8rphCrmlQ2t5ry36diNiFeldLbv6a-dffAafoWjuq63xe5GUzA8UiXHmqEsO9qfwIZFjuymJU5Dyt086c5qX8f5~KURtBAGHv~OvLT-ibZwlwiUQdzcP3mMxfGptFfMnFX-qpipgWM12uHCXc6eqfrQonzBYyIMboBPuoSe005Tlnn8JArQYw~pKRLzoQwrYBBPMtajNDI67xfubIzwkAyNTZJ8uTrYHFe7cG-qy~T1Gj~vTtlGu--7dsR4HJBIKTikQIYm5LrC-RspDtEOH8PdxdGNmaKG5CwcKrlQd9pHPY3egZSRNuo579jSSqp9aP5wKrz~jfDqaLVg__',
            }}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 4</Text>
      </View>

      <View style={styles.story}>
        <View
          style={{
            borderColor: '#dcdcdc',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.newStroyButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>New</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyLabel: {
    color: '#000000',
    marginTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStroyButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
