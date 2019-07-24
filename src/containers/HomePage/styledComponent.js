import styled from 'styled-components'

export default styled.div`
	width: 100%;
	height: 100%;
	.banner-text{
		display: flex;
		justify-content: center;
		align-items:center;
		height: 300px;
		text-align: center;
		font-size: 50px;
	}
	.banner-image{
		width: 50%;
		margin: 0 auto;
		img{
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
`
