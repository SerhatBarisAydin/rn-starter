import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    console.log("email: ", email, "password: ", password);
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };

      await AsyncStorage.setItem("userToken", token);

      return userData;
    } catch (error) {
      console.log("userSlice line 23: ", error);
      throw error;
    }
  }
);

//AutoLogin işlemleri

export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");

    if (token) {
      return token;
    } else {
      throw new Error("User not found..");
    }
  } catch (error) {
    throw error;
  }
});

// Log Out işlemleri

export const logOut = createAsyncThunk('user/logout', async () =>{
    try {
        const auth = getAuth()
        await signOut(auth)

        await AsyncStorage.removeItem("userToken")
        return null;

    } catch (error) {
        throw error
    }
})





//Kullanıcı kayıt işlemleri

export const register = createAsyncThunk('user/register', async({email, password}) => {
      try {
        
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const user = userCredential.user
        const token = user.stsTokenManager.accessToken;

        await sendEmailVerification(user);
        
        await AsyncStorage.setItem("userToken" , token)

        return token;



      } catch (error) {
        throw error;
      }
})





const initialState = {
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //setEmail içerisindeki state initial state'i temsil eder
    //action ise, setEmail dışarıda çağırıldığı zaman o an içerisinde yer alan veriyi cekmeye yarar
    setEmail: (state, action) => {
      const lowerCaseEmail = action.payload.toLowerCase();
      state.email = lowerCaseEmail;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  //yukarıda oluşturduğumuz authentication işlemleri için gerekli üç işlem vardır
  //bu işlem karşılaşılabilecek durumları belirtir
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message;

      })
      .addCase(autoLogin.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload;
      })
      .addCase(autoLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.token = null;
      })
      .addCase(logOut.pending , (state) => {

        state.isLoading =true;
    

      })
      .addCase(logOut.fulfilled , (state, action) => {
        state.isLoading  =false;
        state.isAuth = false;
        state.token = null;
        state. error = null;
      })
      .addCase(logOut.rejected , (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;
      })
      .addCase(register.pending , (state) => {
        state.isLoading  =true;
        state.isAuth = false;
      })
      .addCase(register.fulfilled , (state, action) => {
        state.isLoading = false;
        state.isAuth =true;
        state.token = action.payload;
      })
      .addCase(register.rejected , (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = "Invalid Email or Password"
      })

  },
});

//reducers içerisinde yazılan fonksiyonlar userSlice.actions icinde export edilie
export const { setEmail, setIsLoading, setPassword } = userSlice.actions;
export default userSlice.reducer;
