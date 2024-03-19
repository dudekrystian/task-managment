"use client";


import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react'
import styled from 'styled-components';
import CreateContext from '../Modals/CreateContext';

function Tasks() {
    const { theme } = useGlobalState(); 
  return (
    <TasksStyled theme={theme}>
    <CreateContext />
    </TasksStyled>
  )
}

const TasksStyled = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${(props)=> props.theme.colorBg2};
    border: 2px solid ${(props)=> props.theme.borderColor2};
    border-radius: 1rem;
    padding: 2rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    `;

export default Tasks;
