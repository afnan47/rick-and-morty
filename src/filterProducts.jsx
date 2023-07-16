import Stack from '@mui/system/Stack';
import {Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material/';


export default function FilterProducts({searchstring, list}) {

const filteredList = list.filter((element) => {
   if (searchstring === '') {
       return element;
   }
   else {
       return element.name.toLowerCase().includes(searchstring)
   }
})

 return (
   <Box>
     <Stack spacing={2}
     sx={{
       overflow: 'auto',
       maxHeight: 500,
       minWidth: 600,
     }}
     >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Species</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Orgin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {filteredList.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.status}</TableCell>
              <TableCell align="right">{item.species}</TableCell>
              <TableCell align="right">{item.gender}</TableCell>
              <TableCell align="right">{item.origin.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
    </Box>
 )
}
