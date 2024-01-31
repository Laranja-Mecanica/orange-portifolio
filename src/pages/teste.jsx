// ------ TESTANDO IMPLEMENTAÇÃO DE AMANHÃ - VALORES NAS TAGS ----

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const availableTags = ['WEB', 'UI', 'UX']

function TagsValues() {
  const [selectedValues, setSelectedValues] = useState([])

  const handleChange = (event, newValue) => {
    // Limitar a seleção a no máximo três TAGs
    if (newValue.length <= 3) {
      setSelectedValues(newValue)
    }
  }

  const remainingTags = availableTags.filter(
    (tag) => !selectedValues.includes(tag),
  )

  return (
    <div>
      <Autocomplete
        style={{ width: '300px' }}
        multiple
        id="tags-outlined"
        options={remainingTags}
        getOptionLabel={(option) => option}
        onChange={handleChange}
        value={selectedValues}
        noOptionsText="Você atingiu o limite de TAGs" // Faz aparecer o texto depois de atingir o limite de TAGs
        renderInput={(params) => (
          <TextField {...params} label="Tags" placeholder="Tags" />
        )}
      />

      {selectedValues.length > 0 && (
        // Se o comprimento de SelectedValues é maior que Zero, chama Typography
        <Typography variant="inherit" style={{ marginTop: '16px' }}>
          Valores Selecionados:
        </Typography>
      )}
      <ul>
        {selectedValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default TagsValues

// const teste = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const handleOpen = () => {
//     setIsOpen(true)
//   }

//   const handleClose = () => {
//     setIsOpen(false)
//   }
//   return (
//     <>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Teste
//       </Button>

//       <ConfimationDialog
//         open={isOpen}
//         onClose={handleClose}
//         onClick={handleClose}
//       />

//       <DeleteDialog open={isOpen} onClick={handleClose} onClose={handleClose} />

//       <FormDialog open={isOpen} onClose={handleClose} onClick={handleClose} />

//       <DetailsDialog open={isOpen} onClose={handleClose} />
//     </>
//   )
// }

// export default teste
