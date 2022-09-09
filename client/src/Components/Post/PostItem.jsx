import React from 'react'
import useGeneralStore from '../../App/Store/GeneralStore'

export default function PostItem() {
    const {bears} = useGeneralStore();
  return (
    <div>PostItem</div>
  )
}
