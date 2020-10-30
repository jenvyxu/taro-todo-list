import React, { Component, useState } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtInput, AtCheckbox } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import './index.css'


export default () => {
  const [todoList, setTodoList] = useState([
    { label: '香蕉', value: 0 },
    { label: '苹果', value: 1 }
  ])
  const [completeItemList, setCompleteItemList] = useState([])
  const [newTodoText, setNewTodoText] = useState('')

  const handleClick = () => {
    setTodoList((preList) => [...preList, {
      label: newTodoText,
      value: preList.length
    }])
    setNewTodoText('')
  }

  const handleInput = (value, e) => {
    e.stopPropagation()
    setNewTodoText(value)
  }

  const handleChange = (value, e) => {
    setCompleteItemList(value)
  }

  return (
    <View className='index'>
      <View>
        {
          <AtCheckbox
            options={todoList}
            selectedList={completeItemList}
            onChange={handleChange}
          />
        }
      </View>
      <AtInput
        type='text'
        placeholder='请输入todo'
        value={newTodoText}
        onChange={handleInput}
      />
      <AtButton onClick={handleClick} disabled={newTodoText ? false : true}
        className="add-todo-btn">添加Todo</AtButton>
    </View>
  )
}

