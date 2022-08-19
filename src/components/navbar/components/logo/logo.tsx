import { Link } from 'react-router-dom'
import logoImageUrl from '../../../../assets/logo.svg'

export function Logo() {
  return (
    <Link to='/'>
      <img
        src={logoImageUrl}
        alt={`Logo da Coffee Delivery com a ilustração de um copo roxo com um foguete branco 
        decolando`}
      />
    </Link>
  )
}
