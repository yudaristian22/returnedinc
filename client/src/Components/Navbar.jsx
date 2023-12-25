import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../redux/userRedux"
import { resetCart } from "../redux/cartRedux"

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const Language = styled.div`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`

const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`
const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: bold;
	cursor: pointer;
	${mobile({ fontSize: "18px" })}
`
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const StyledLink = styled(Link)`
	text-decoration: none; /* Menghilangkan garis bawah */
	color: inherit; /* Mewarisi warna dari parent (default) */

	&:hover {
		/* Gaya saat tautan dihover */
		text-decoration: none;
		color: inherit;
		/* Tambahkan gaya lain jika diperlukan */
	}
`

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity)
	const currentUser = useSelector((state) => state.user.currentUser)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const handleLogout = () => {
		// Dispatch aksi logout dan arahkan pengguna ke halaman beranda
		dispatch(logout())
		dispatch(resetCart())
		navigate("/")
	}
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<StyledLink to="/">
						<Logo>RETURNED</Logo>
					</StyledLink>
				</Center>
				<Right>
					{currentUser ? (
						// Jika pengguna sudah login, tampilkan tombol logout
						<MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
					) : (
						// Jika pengguna belum login, tampilkan tombol login dan register
						<>
							<StyledLink to="/register">
								<MenuItem>REGISTER</MenuItem>
							</StyledLink>
							<StyledLink to="/login">
								<MenuItem>SIGN IN</MenuItem>
							</StyledLink>
						</>
					)}
					<StyledLink to="/cart">
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</StyledLink>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
