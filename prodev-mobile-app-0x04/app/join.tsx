import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from '@/constants';
import { styles } from '@/styles/_joinstyle';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{}}>
          <View style={styles.iconsection}>
            <Ionicons name='arrow-back' size={25} />
            <Image source={HEROLOGOGREEN} />
          </View>

          <View style={styles.titleTextGroup}>
            <Text style={styles.titleText}>Create your Account</Text>
            <Text style={styles.subText}>
              Enter your details to create a new account.
            </Text>
          </View>

          <View style={styles.formGroup}>
            <View>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                keyboardType='email-address'
                style={styles.formControl}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={[{ flex: 1 }, styles.passwordControl]} />
                <FontAwesome name='eye-slash' size={24} color='#7E7B7B' />
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.formLabel}>Confirm Password</Text>
              <View style={styles.formPasswordControl}>
                <TextInput style={[{ flex: 1 }, styles.passwordControl]} />
                <FontAwesome name='eye-slash' size={24} color='#7E7B7B' />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>

          <View style={styles.dividerGroup}>
            <View style={styles.divider}></View>
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider}></View>
          </View>

          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={styles.secondaryButton}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <Image source={GOOGLELOGO} />
                <Text style={styles.secondaryButtonText}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <Image source={FACEBOOKLOGO} />
                <Text style={styles.secondaryButtonText}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.signupgroup}>
            <Text style={styles.signupTitleText}>Already have an account?</Text>
            <Text style={styles.signupSubTitleText}>Signin</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
