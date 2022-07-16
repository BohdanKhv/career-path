import { Skeleton } from '../'

const JobLoading = ({index}) => {
  return (
      <tr 
        style={{
          height: '50px',
          ['--order']: index,
        }}
      >
        <td className="px-1 border-bottom" colSpan="2" >
          <Skeleton animation="wave" className="w-100" height={45} />
        </td>
        <td className="px-1 border-bottom" colSpan="1" >
          <Skeleton animation="wave" className="w-100" height={45} />
        </td>
        <td className="px-1 border-bottom" colSpan="1" >
          <Skeleton animation="wave" className="w-100" height={45} />
        </td>
      </tr>
  )
}

export default JobLoading