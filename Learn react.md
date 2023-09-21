
## Topic: Learn react

**Link:** https://www.youtube.com/playlist?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR

### Core concepts react
1. Components
2. Props
3. State

### Notes
#### Basic knowledge
- React disebut library karena menyediakan fungsi fungsi untuk membangun UI, tapi mereka membebaskan developer untuk memilih fungsi mana yang mereka pakai atau mereka perlukan, cara kerja seperti ini sering disebut **un-opinionated** 
- JSX extensi sintax javascript untuk mendeskripsikan UI seperti sintax html
- Kelebihan Jsx dibanding html adalah jsx bisa menyimpan dan menampilkan data secara dinamis dibandingkan html yang statis
- Jsx selalu mengembalikan satu elemen jadi apabila ingin membangun satu halaman dengan beberapa elemen didalamnya harus dibungkus dalam satu tag kosong atau bisa dibungkus dalam div (disarankan)
- Semua tag harus ditutup karena sifat jsx lebih strict daripada html
- Menggunakan gaya penulisan camelcase untuk attribute seperti onClick dan juga className
- javascript native menggunakan sistem imperative programming yang berarti menjelaskan langkah langkah **bagaimana** sesuatu harus dilakukan
- React menggunkanan sistem declarative programming yaitu kita hanya perlu menuliskan **hasil / output** apa yang harus dihasilkan
- Element pada setiap dokumen wajib dibungkus oleh parent yaitu div

#### Making components
- Komponen react dibuat dalam function javascript yang namanya diawali dengan huruf besar
- Function mengembalikan UI yang ditulis dengan Jsx dan dirender sebagai tag HTML

#### Props
- Javascript objek yang menjadi argumen untuk function component
- Membuat data lebih dinamis dan efisien

#### Styling
- (Optional) Jika setelah nama file css ditambahkan **.module** maka file css tersebut akan menjadi css module style sheet yang penggunaannya sedikit berbeda dengan file css biasa yaitu dengan cara 
```jsx
import style from "./App.module.css";
<h1 className="style.name">Zio</h1>
alert(s);
```

#### List
- Tipe data javascript yang digunakan untuk menyimpan multiple data baik itu array biasa atau array object
```jsx
const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
];
export const Planets = () => {
    return (
        <div>
            {planets.map((planet, key) => {
                return !planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
            })}
        </div>
    )
}
```
- Seperti contoh di atas kita menggunakan function **.map** untuk iterate setiap elemen dari list **Planets** dan menampilkannya pada halaman
- Mengapa menggunakan **.map** dibandingkan **.forEach**? karena function **.map** memiliki fitur yang tidak dimiliki oleh **.forEach** yaitu return data, jika di dalam **.forEach** kita hanya melakukan looping dari semua data yang ada di dalam list sedangkan **.map** kita bisa mengembalikan data yang telah kita looping untuk menjadi list baru atau menampilkan sebuah elemen karena function **.map** memiliki **return** value yang dimana function **.forEach** tidak memiliki itu sehingga jika kita ingin membuat list baru yang berisi data dari list lama yang telah kita modifikasi atau ingin menampilkan elemen sangat membantu pekerjaan function **.map** sangat membantu kita dibandingkan menggunkanan function **.forEach**

#### Use state (State management react)
- React merender satu file/halaman hanya sekali jadi kita membutuhkan state management bawaan dari react yaitu **useState** untuk membuat halaman lebih dinamis dan dapat menampilkan data secara realtime jika terjadi perubahan pada halaman
- Cara memanggil dan menggunakan useState dibutuhkan dua variable yaitu variable yang ingin kita gunakan (dalam kasus ini **age**) dan variable yang digunakan untuk mengubah value atau nilai dari variable yang ini kita gunakan tadi (**setAge**) lalu memasukkan data sesuai yang kita inginkan untuk variable tersebut
- Contoh full code untuk praktek useState

```jsx
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const setZeroCount = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <br />
      <button onClick={decreaseCount} style={{ marginRight: 5 }} disabled={count == 0}>Decrease</button>
      <button onClick={setZeroCount} style={{ marginRight: 5 }}>Set To Zero</button>
      <button onClick={increaseCount} style={{ marginRight: 5 }}>Increase</button>
    </div>
  );
}
export default App;
```

- Contoh lain penggunaan useState untuk mendapatkan value dari input secara real-time saat terjadi perubahan value pada input
```jsx
function App() {
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <div className="App">
      <input type='text' onChange={changeInputValue} />
      <br />
      {inputValue}
    </div>
  );
}
export default App;
```

#### React component lifecycle & useEffect hook
##### Component lifecycle
- Lifecycle component dalam react terbagi menjadi tiga state/keadaan yaitu mounting, updating dan unmounting
	- Mounting adalah keadaan saat komponen muncul pada halaman website/ditampilkan pada halaman website
	- Updating adalah keadaan saat perubahan dalam komponen baik itu state, variable atau ui dalam komponen
	- Unmounting adalah keadaan saat komponen hilang pada halaman website/berhenti ditampilkan pada halaman website

**App.js**
```jsx
import './App.css';
import { useState } from 'react';
import { Text } from './Text';
function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      <button onClick={() => { setShowText(!showText) }}>
        Show text
      </button>
      {showText && <Text />}
    </div>
  );
}
export default App;
```

**Text.js**
```jsx
import React, { useEffect } from "react";
import { useState } from "react";
export const Text = () => {

    const [text, setText] = useState("");
    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        }
    }, [text])
    
    return (
        <div>
            <input type="text" onChange={(e) => {
                setText(e.target.value);
            }} />
            <h1> {text} </h1>
        </div>
    )
}
```
 Pada contoh di atas **Text.js** adalah component terpisah yang diimport ke dalam **App.js** untuk tracking state dalam suatu komponen. Saat tombol **Show text** ditekan akan langsung mengubah value dari variable **showText** yang disebut dalam kondisi **updating** yang juga akan memunculkan komponen **Text** pada halaman website dan mengubah state dalam komponen tersebut yaitu menjadi **mounting**. Ketika kita mengetikkan sesuatu kedalam input elemen langsung merubah keaadan komponen **Text** dari **mounting** menjadi **updating** karena terjadi perubahan value secara realtime pada variable **text** yang dilakukan di function **onChange** pada input. Terakhir saat tombol **Show Text** ditekan akan menghilangkan/menyembunyikan komponen **Text** pada halaman web dan juga mengubah state dari komponen tersebut menjadi **unmounting** untuk lebih jelas tentang cara tracking state pada sebuah komponen kita bisa menggunakan **useEffect hook**
##### useEffect hook
- useEffect hook digunakan untuk mengatur suatu komponen berdasarkan lifecycle komponen tersebut yang dapat digunakan untuk menjalankan suatu fungsi atau melakukan aksi saat komponen yang diatur itu berada dalam keadaan mounting, updating, atau unmounting 

```jsx
useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        }
    }, [text])
```
- useEffect dijalankan saat terjadi perubahan state pada suatu komponen/halaman
	- Console.log{"Component mounted dijalankan saat komponen **mounting** pada halaman web"}
	- Jika kita ingin menjalankan function atau melakukan aksi pada saat komponen **unmounting** kita bisa menggunakan return function di dalam useEffect hook
	- useEffect juga akan otomatis dijalankan apabila terdapat perubahan atau update pada variable yang kita track atau bisa disebut komponen tersebut dalam keadaan **updating**, dalam source code di atas adalah variable **text**
	- Jika kita hanya ingin melakukan function pada saat komponen mounting maka kita bisa membiarkan kurung siku di akhir useEffect hook kosong

#### React Router Dom
**React Router Dom** adalah salah satu libray di dalam react yang memungkinkan kita untuk mengubah element yang dirender dalam html kita atau bisa disebut berpindah halaman (walaupun jika disebut demikian tidak sepenuhnya benar karena react mengusung konsep Single Page Application). Di dalam **React Router Dom** terdapat bbeerapa komponen yang sering digunakan yaitu **Browser Router**, **Router**, **Routes**, **Link**, **useNavigate** dan **useParams**
- **Browser Router** adalah component parent/master component untuk menampung element element apa saja yang akan dirender pada aplikasi kita, maka dari itu kita menggunakan **Browser Router** pada file **App.js** sebagai gerbang awal dari aplikasi kita
- **Routes** adalah list yang berisi path/routes yang akan kita gunakan untuk merender halaman yang ingin kita buka, Contoh: "/home", "/about", "/profile"
- **Router** adalah element yang kita gunakan untuk menyimpan route/path yang kita gunakan untuk menunjuk halaman yang ingin kita buka, element ini berisi route/path dan juga element/komponen yang ingin kita buka saat kita membuka path tersebut, Contoh: 
```jsx
<Route path="/" element={<Home />} />
```
- **Link** adalah element yang digunakan untuk menampilkan route/path yang sudah kita deklarasikan menggunakan element **Routes** ke web kita, element ini fungsinya mirip dengan tag **a** di html dan biasanya digunakan di dalam navbar untuk navigasi antar halaman
Contoh:
```jsx
<Link to={'/profile/zio'}>Zio</Link>
```
- **useNavigate** adalah fungsi/method yang digunakan untuk berpindah antar halaman secara otomatis tanpa harus melakukan click pada **Link** atau memasukkan path pada kolom url di web browser, fungsi ini sering dipakai untuk melakukan redirect setelah user melakukan suatu aksi seperti logout atau menambahkan data baru
Contoh: 
```jsx
   import { useNavigate } from "react-router-dom"
   export const LogoutButton () {
   const navigate = useNavigate();
   
		const handleLogout = () => {
			navigate('/home')
		}
		
		return (
			<button onClick={handleLogout()}>Logout</button>
		)
   }
```
- **useParams** adalah fungsi yang digunakan untuk mengirimkan parameter ke dalam route yang dapat digunakan di dalam halaman yang kita tuju, fungsi ini sering digunakan untuk halaman detail dengan mengirimkan identifier dari data yang ingin kita lihat lebih detail seperti Id_data atau uuid,
Contoh:
```jsx
<Route path="/profile/:username" element={<Profile />} />
```
 Kita menambah *:parameter* saat kita mendeklarasikan route yang akan ditangkap di halaman yang akan dituju.
 
```jsx
import { Link } from "react-router-dom
const listPerson = 
    { name: "Zio", age: 19 }
    { name: "Vei", age: 18 }
    { name: "Zordiev", age: 17 
]
export const ListPerson = () => 
    return
        <div>
            <h1>This is the ListPerson page</h1>
            <h3>List Person</h3>
            <ul>
                {listPerson.map((person, key) => 
                    return <li>
                        <h1><Link to={`/profile/${person.name}`} key={key}>{person.name}</Link></h1>
                        <h1>{person.age}</h1>
                    </li>
                })
            </ul>
        </div>
}
```
Pada baris kode di atas terdapat list person yang sudah dirender satu persatu menjadi list dengan Link yang bila ditekan akan mengarahkan ke halaman profile sambil mengirimkan parameter berupa nama dari person.

```jsx
import { useParams, useNavigate } from "react-router-dom"
export const Profile = () => {
    let { username } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>This is the profile page for {username} </h1>
            <button onClick={() => navigate('/listperson')}>Go to list person page</button>
        </div>
    )
}
```
Pada halaman yang ingin kita menggunakan **useParams** di dalamnya kita perlu memanggil fungsi useParams dulu untuk menggunakan fungsi tersebut lalu kita perlu mengakses value dari useParams yang sudah kita deklarasikan di route tadi, untuk kasus ini isi variable adalah *username* karena di route kita mendeklarasikan *:username* lalu tinggal kita panggil variable tersebut di dalam element

Untuk implementasinya lengkapnya sebagai berikut:
- App.js
```jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { ListPerson } from './pages/ListPerson';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { Profile } from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listperson" element={<ListPerson />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
```
Jika dilihat ada route yang berisi "\*" yang berarti route apapun selain dari yang kita deklarasikan akan mengembalikan **404 Not Found** untuk menghindari react merender halaman kosong saat kita membuka route yang tidak kita deklarasikan, untuk pendeklarasian element yang kita gunakan di route bisa menggunakan cara yang sering kita lakukan

- Home.js
```jsx
export const Home = () => {
    return (
        <h1>This is the home page</h1>
    )
}
```


### Summary
React adalah UI Library yang declarative. React merender dokumen dalam satu dokumen/root menggunakan fungsi ReactDOM.render(<App/>, document.getElementById("root")) yang ada pada index.js / app.js dan dirender di index.html dengan id document root
