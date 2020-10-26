import React from 'react'
import Link from 'next/link'

import {
    BackLink,
    Header,
    HeaderContent,
    HeaderText,
    Logo,
    TextDescription,
    TopBar

} from './styles'
import { useRouter } from 'next/router'


interface PageHeaderProps {
    title: string
    description?: string
}

 const  PageHeader: React.FC<PageHeaderProps> = (props)=> { 
     const router = useRouter()
    return(
        <Header>
                <TopBar className="top-bar-container">
                        <BackLink onClick={()=> router.back()}>
                            <img src="/icons/back.svg" alt="Voltar"/>
                        </BackLink>
                    <Logo src="/logo.svg" alt="Logo"/>
                </TopBar>

                <HeaderContent>
                    <HeaderText>
                       {props.title}
                    </HeaderText>
                        {props.description && 
                            <TextDescription>
                                {props.description}
                            </TextDescription>    
                        }
                </HeaderContent>
        </Header>
    )
}

export default PageHeader