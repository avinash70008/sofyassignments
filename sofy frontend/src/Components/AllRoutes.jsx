export const AllRoutes =() => {

    return(
        <Routes>

            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
      
        </Routes>
    )
}