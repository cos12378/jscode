import logo from './logo.svg';
import './App.css';
import DropZone from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import './Theme.css';
import { styled } from 'styled-components';
import { useState } from 'react';
import { css } from '@emotion/css';
import { Input, } from 'bootstrap';

const Button = styled.button(
  `color: ${props => props.color};
  &:hover{
    color:red
  }
  `
)

const Button1 = styled.button((props) => ({
  color: props.color, backgroundColor: "red"
}))

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div class="grid grid-cols-3 gap-4">
        <div class="...">01</div>
        <div class="...">02</div>
        <div class="...">03</div>
        <div class="col-span-2 ...">04</div>
        <div class="...">05</div>
        <div class="...">06</div>
        <div class="col-span-2 ...">07</div>
      </div>
    </>
  )
}

const Button3 = ({ color }) => {
  return <button className={css`
  color:red;
  &:hover{
    color: ${color}
  }`}>sdfsdfsd</button>
}

export default App;
