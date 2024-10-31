import {extendTheme} from "chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                overflowX: "hidden",
                color: props.colorMode === 'light' ? "black" : "white",
                bg: props.colorMode === 'light' ? "white" : "black"
            }
        })
    },
})