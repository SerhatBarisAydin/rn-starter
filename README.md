# 🛫 Airport Companion App

> **Not:** Bu proje aktif geliştirme aşamasındadır. Mevcut versiyon final versiyon değildir. Önümüzdeki günlerde yeni özellikler ve iyileştirmeler eklenecektir.

[![React Native](https://img.shields.io/badge/React%20Native-0.70+-blue.svg)](https://reactnative.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Integrated-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Airport Companion App, seyahat eden kullanıcılar için havalimanı deneyimini kolaylaştırmak amacıyla geliştirilmiş modern bir mobil uygulamadır. React Native ve Firebase teknolojileri kullanılarak cross-platform desteği ile iOS ve Android platformlarında çalışabilecek şekilde tasarlanmıştır.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Stack](#-teknoloji-stack)
- [Proje Yapısı](#-proje-yapısı)
- [Kurulum](#-kurulum)
- [Yapılandırma](#-yapılandırma)
- [Kullanım](#-kullanım)
- [Geliştirme](#-geliştirme)
- [Build ve Deploy](#-build-ve-deploy)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## ✨ Özellikler

### Mevcut Özellikler
- 🔐 **Kullanıcı Kimlik Doğrulama**: Firebase Authentication ile güvenli giriş sistemi
- 📱 **Cross-Platform Destek**: iOS ve Android için tek kod tabanı
- 🎨 **Modern UI/UX**: Kullanıcı dostu ve responsive arayüz tasarımı
- 🔄 **Real-time Veri Senkronizasyonu**: Firebase Realtime Database/Firestore entegrasyonu

### Planlanan Özellikler
- ✈️ Gerçek zamanlı uçuş bilgileri ve takibi
- 🗺️ Havalimanı harita navigasyonu
- 📢 Push bildirimleri ve uyarılar
- 🎫 Dijital boarding pass yönetimi
- 🏪 Havalimanı içi servis ve mağaza rehberi
- 🌍 Çoklu dil desteği
- 📊 Seyahat geçmişi ve istatistikler

## 🛠 Teknoloji Stack

### Frontend
- **React Native**: Cross-platform mobil uygulama framework'ü
- **JavaScript/JSX**: Ana programlama dili
- **React Navigation**: Sayfa yönlendirme ve navigasyon

### Backend & Servisler
- **Firebase Authentication**: Kullanıcı kimlik doğrulama
- **Firebase Realtime Database / Firestore**: Veri saklama
- **Firebase Cloud Messaging**: Push bildirimleri
- **Firebase Storage**: Medya dosyaları saklama

### Geliştirme Araçları
- **Expo**: React Native geliştirme platformu
- **Babel**: JavaScript derleyici
- **ESLint**: Kod kalitesi ve stil kontrolü
- **npm/yarn**: Paket yöneticisi

## 📁 Proje Yapısı

```
airport-companion-app/
│
├── assets/                      # Statik varlıklar (görseller, fontlar, vb.)
│   ├── images/                 # Uygulama görselleri
│   ├── icons/                  # İkonlar
│   └── fonts/                  # Özel fontlar
│
├── src/                        # Kaynak kod dizini
│   ├── components/             # Yeniden kullanılabilir React bileşenleri
│   │   ├── common/            # Ortak bileşenler (Button, Input, Card, vb.)
│   │   ├── layout/            # Layout bileşenleri (Header, Footer, vb.)
│   │   └── features/          # Özellik bazlı bileşenler
│   │
│   ├── screens/               # Ekran bileşenleri
│   │   ├── Auth/             # Kimlik doğrulama ekranları
│   │   ├── Home/             # Ana sayfa
│   │   ├── Flight/           # Uçuş bilgileri
│   │   ├── Map/              # Harita ekranı
│   │   └── Profile/          # Kullanıcı profili
│   │
│   ├── navigation/            # Navigasyon yapılandırması
│   │   ├── AppNavigator.js   # Ana navigasyon
│   │   ├── AuthNavigator.js  # Auth akış navigasyonu
│   │   └── TabNavigator.js   # Alt tab navigasyonu
│   │
│   ├── services/              # API ve servis katmanı
│   │   ├── firebase/         # Firebase servis fonksiyonları
│   │   ├── api/              # Harici API çağrıları
│   │   └── storage/          # Yerel depolama servisleri
│   │
│   ├── utils/                 # Yardımcı fonksiyonlar
│   │   ├── constants.js      # Sabit değerler
│   │   ├── helpers.js        # Yardımcı fonksiyonlar
│   │   └── validators.js     # Validasyon fonksiyonları
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.js        # Kimlik doğrulama hook'u
│   │   └── useFlight.js      # Uçuş verisi hook'u
│   │
│   ├── context/               # React Context API
│   │   ├── AuthContext.js    # Kimlik doğrulama context'i
│   │   └── ThemeContext.js   # Tema context'i
│   │
│   └── styles/                # Global stil dosyaları
│       ├── colors.js         # Renk paleti
│       ├── typography.js     # Yazı stilleri
│       └── spacing.js        # Boşluk değerleri
│
├── firebaseConfig.js          # Firebase yapılandırma dosyası
├── App.js                     # Ana uygulama bileşeni
├── app.json                   # Expo uygulama yapılandırması
├── babel.config.js            # Babel yapılandırması
├── package.json               # Proje bağımlılıkları
├── package-lock.json          # Bağımlılık kilit dosyası
├── .gitignore                 # Git ignore dosyası
└── README.md                  # Proje dokümantasyonu
```

## 🚀 Kurulum

### Ön Gereksinimler

Aşağıdaki yazılımların sisteminizde kurulu olması gerekmektedir:

- **Node.js** (v14 veya üzeri) - [İndir](https://nodejs.org/)
- **npm** veya **yarn** - Node.js ile birlikte gelir
- **Expo CLI** - `npm install -g expo-cli`
- **Git** - [İndir](https://git-scm.com/)

### iOS Geliştirme için (Opsiyonel)
- **Xcode** (macOS gerektirir)
- **CocoaPods** - `sudo gem install cocoapods`

### Android Geliştirme için (Opsiyonel)
- **Android Studio**
- **Android SDK**
- **JDK 11** veya üzeri

### Adım Adım Kurulum

1. **Projeyi Klonlayın**
   ```bash
   git clone https://github.com/js-lover/airport-companion-app.git
   cd airport-companion-app
   git checkout File-Architecture
   ```

2. **Bağımlılıkları Yükleyin**
   ```bash
   # npm kullanıyorsanız
   npm install

   # veya yarn kullanıyorsanız
   yarn install
   ```

3. **Expo CLI'yi Yükleyin** (eğer kurulu değilse)
   ```bash
   npm install -g expo-cli
   ```

4. **iOS Bağımlılıklarını Yükleyin** (Sadece macOS için)
   ```bash
   cd ios
   pod install
   cd ..
   ```

## ⚙️ Yapılandırma

### Firebase Kurulumu

1. **Firebase Console'da Proje Oluşturun**
   - [Firebase Console](https://console.firebase.google.com/) adresine gidin
   - "Add project" butonuna tıklayın
   - Proje adını girin ve adımları takip edin

2. **Firebase Yapılandırma Dosyasını Düzenleyin**
   
   `firebaseConfig.js` dosyasını açın ve kendi Firebase proje bilgilerinizle doldurun:

   ```javascript
   // firebaseConfig.js
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';
   import { getStorage } from 'firebase/storage';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   export const storage = getStorage(app);
   ```

3. **Firebase Authentication'ı Etkinleştirin**
   - Firebase Console'da "Authentication" bölümüne gidin
   - İstediğiniz giriş yöntemlerini etkinleştirin (Email/Password, Google, vb.)

4. **Firestore Database Oluşturun**
   - Firebase Console'da "Firestore Database" bölümüne gidin
   - "Create database" butonuna tıklayın
   - Test modunda veya production modunda başlatın

### Ortam Değişkenleri

Hassas bilgileri korumak için `.env` dosyası oluşturun:

```bash
# .env
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_auth_domain_here
FIREBASE_PROJECT_ID=your_project_id_here
# ... diğer Firebase yapılandırma değerleri
```

**Not:** `.env` dosyasını `.gitignore` dosyasına eklemeyi unutmayın!

## 💻 Kullanım

### Geliştirme Modunda Çalıştırma

1. **Expo Geliştirme Sunucusunu Başlatın**
   ```bash
   npm start
   # veya
   expo start
   ```

2. **Uygulamayı Çalıştırın**
   
   Expo Dev Tools tarayıcınızda açılacaktır. Aşağıdaki seçeneklerden birini kullanabilirsiniz:

   - **iOS Simulator**: `i` tuşuna basın (macOS gerektirir)
   - **Android Emulator**: `a` tuşuna basın (Android Studio gerektirir)
   - **Fiziksel Cihaz**: Expo Go uygulamasıyla QR kodu tarayın
     - [iOS için Expo Go](https://apps.apple.com/app/expo-go/id982107779)
     - [Android için Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Komut Satırı Seçenekleri

```bash
# iOS'ta çalıştır
npm run ios

# Android'de çalıştır
npm run android

# Web'de çalıştır
npm run web

# Testleri çalıştır
npm test

# Kodu lint'le
npm run lint
```

## 🔧 Geliştirme

### Kod Yapısı ve Standartları

- **ESLint**: Kod kalitesi için ESLint kurallarını takip edin
- **Prettier**: Kod formatlaması için Prettier kullanın
- **Naming Conventions**: 
  - Bileşenler: PascalCase (örn: `FlightCard.js`)
  - Fonksiyonlar ve değişkenler: camelCase (örn: `getUserData()`)
  - Sabitler: UPPER_SNAKE_CASE (örn: `API_BASE_URL`)
  - Dosya ve klasörler: kebab-case (örn: `flight-details.js`)

### Yeni Bir Özellik Ekleme

1. **Feature Branch Oluşturun**
   ```bash
   git checkout -b feature/yeni-ozellik-adi
   ```

2. **Gerekli Dosyaları Oluşturun**
   - Screen bileşeni (`src/screens/`)
   - İlgili component'ler (`src/components/`)
   - Servis fonksiyonları (`src/services/`)
   - Navigation güncellemeleri

3. **Değişiklikleri Commit Edin**
   ```bash
   git add .
   git commit -m "feat: yeni özellik açıklaması"
   ```

4. **Pull Request Oluşturun**
   ```bash
   git push origin feature/yeni-ozellik-adi
   ```

### Git Commit Mesajı Formatı

Conventional Commits standardını kullanın:

- `feat:` - Yeni özellik
- `fix:` - Hata düzeltmesi
- `docs:` - Dokümantasyon değişikliği
- `style:` - Kod formatlaması
- `refactor:` - Kod yeniden yapılandırma
- `test:` - Test ekleme/düzeltme
- `chore:` - Yapılandırma ve build değişiklikleri

## 📦 Build ve Deploy

### Production Build

#### iOS için Build

```bash
# Expo build service kullanarak
expo build:ios

# EAS Build kullanarak (önerilen)
eas build --platform ios
```

#### Android için Build

```bash
# APK build
expo build:android -t apk

# AAB build (Google Play için)
expo build:android -t app-bundle

# EAS Build kullanarak (önerilen)
eas build --platform android
```

### App Store'a Yükleme

1. **iOS için**
   - Apple Developer hesabı gereklidir
   - Xcode ile build alın veya Expo build service kullanın
   - App Store Connect'te uygulama oluşturun
   - TestFlight üzerinden test edin
   - Review için gönderin

2. **Android için**
   - Google Play Console hesabı gereklidir
   - Signed APK/AAB oluşturun
   - Google Play Console'da uygulama oluşturun
   - Internal test track'e yükleyin
   - Review için gönderin

### Over-the-Air (OTA) Updates

Expo Updates kullanarak uygulama mağazalarını bypass ederek küçük güncellemeler gönderebilirsiniz:

```bash
expo publish
```

## 🧪 Test

### Test Çalıştırma

```bash
# Tüm testleri çalıştır
npm test

# Watch modunda çalıştır
npm test -- --watch

# Coverage raporu oluştur
npm test -- --coverage
```

### Test Yazma

Jest ve React Native Testing Library kullanarak test yazın:

```javascript
// Example: Button.test.js
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Click Me" onPress={onPressMock} />
    );
    
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
```

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Katkıda bulunmak için:

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

### Katkıda Bulunma Kuralları

- Kod kalitesi standartlarına uyun
- Yeni özellikler için test yazın
- Dokümantasyonu güncel tutun
- Pull request açıklamalarında değişiklikleri detaylı açıklayın
- Responsive tasarım prensiplerine uyun

## 🐛 Sorun Bildirme

Bir hata buldunuz mu? Lütfen aşağıdaki bilgileri içeren bir issue açın:

- Hatanın açıklaması
- Hatayı yeniden oluşturma adımları
- Beklenen davranış
- Ekran görüntüleri (varsa)
- Cihaz bilgileri (iOS/Android versiyonu, cihaz modeli)

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👥 Ekip

- **Geliştirici**: [js-lover](https://github.com/js-lover)

## 🙏 Teşekkürler

Bu proje aşağıdaki açık kaynak projelerden faydalanmaktadır:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/)
- [React Navigation](https://reactnavigation.org/)

## 📞 İletişim

Proje hakkında sorularınız için:

- GitHub Issues: [Sorun bildir](https://github.com/js-lover/airport-companion-app/issues)
- Email: [İletişim bilgisi eklenecek]

## 🗺️ Yol Haritası

### Kısa Vadeli (Q1 2026)
- [ ] Gerçek zamanlı uçuş API entegrasyonu
- [ ] Kullanıcı profil yönetimi
- [ ] Push notification implementasyonu
- [ ] Havalimanı harita özelliği

### Orta Vadeli (Q2 2026)
- [ ] Offline mod desteği
- [ ] Çoklu dil desteği (İngilizce, Türkçe, vb.)
- [ ] Dark mode
- [ ] Uçuş rezervasyon entegrasyonu

### Uzun Vadeli (Q3-Q4 2026)
- [ ] Yapay zeka destekli seyahat asistanı
- [ ] Sosyal özellikler (arkadaş ekleme, seyahat paylaşımı)
- [ ] Havalimanı içi AR navigasyon
- [ ] Sadakat programı entegrasyonu

---

**Not**: Bu README aktif olarak geliştirilmektedir ve proje ilerledikçe güncellenecektir.

Son Güncelleme: Ocak 2026
