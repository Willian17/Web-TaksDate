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


interface PageHeaderProps {
    title: string
    description?: string
}

 const  PageHeader: React.FC<PageHeaderProps> = (props)=> {
    return(
        <Header>
                <TopBar className="top-bar-container">
                    <Link href="/">
                        <BackLink>
                            <img src="/icons/back.svg" alt="Voltar"/>
                        </BackLink>
                    </Link>
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