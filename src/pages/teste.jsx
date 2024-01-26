import React, { useState } from 'react'
/* import { Button } from '@mui/material' */

import {
  Button,
  Dialog,
  Typography,
  Box
} from '@mui/material'


import { ConfimationDialog, DeleteDialog, FormDialog } from '@/components';

const teste = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Teste
      </Button>

      {/* <ConfimationDialog
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
      /> */}


      {/* <DeleteDialog
        open={isOpen}
        onClick={handleClose}
        onClose={handleClose}
      /> */}

      <FormDialog
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
      />

    </>
  )
}

export default teste