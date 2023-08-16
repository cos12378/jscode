import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './User';

export type tGender =
  "남자" | "여자"

export type tUser = {
  id: string,
  password: string,
  name: string | number,
  gender?: tGender,
  children?: tUser[],
  a?: any,
  [key: string]: any
}

function App() {

  const [name, setName] = useState<string>("")

  const user: tUser = { id: "1000", password: "fff", name: "ew", gender: "여자" };
  user['name'] = 1
  user['gender'] = "남자"

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    setName(e.target.value)
  }

  const convertName = (name: string): string => {
    return `sss${name}sss`
  }

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)}></input>
      <User user={user} name={name}></User>
    </div>
  );
}

export default App;
