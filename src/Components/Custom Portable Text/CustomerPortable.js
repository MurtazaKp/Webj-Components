import { PortableText } from '@portabletext/react'
import ImageBox from './ImageBox'


export function CustomPortableText({  value }) {
  
    const components = {
       
        
        types: {
            image: ({ value }) => {
                return (
                    <div className="my-6 space-y-2">
                        <ImageBox
                            image={value}
                         
                            classesWrapper=""
                        />
                       
                    </div>
                )
            },
            
           
           
        },
    }

    return <PortableText components={components}   value={value} />
}
