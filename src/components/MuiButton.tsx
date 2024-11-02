import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const MuiButton = () => {
	return (
		<Stack spacing={2} direction="column">
			<Stack spacing={2} direction="row">
				<Button variant="text">Text</Button>
				<Button variant="contained">contained</Button>
				<Button variant="outlined">outlined</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					primary
				</Button>
				<Button variant="contained" color="secondary">
					secondary
				</Button>
				<Button variant="contained" color="error">
					error
				</Button>
				<Button variant="contained" color="warning">
					warning
				</Button>
				<Button variant="contained" color="info">
					info
				</Button>
				<Button variant="contained" color="success">
					success
				</Button>
			</Stack>
			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" size="small">
					small
				</Button>
				<Button variant="contained" size="medium">
					medium
				</Button>
				<Button variant="contained" size="large">
					large
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" startIcon={<SendIcon />}>
					Send
				</Button>
				<Button variant="contained" endIcon={<SendIcon />} aria-label="send">
					Send
				</Button>
				<IconButton color="success">
					<SendIcon />
				</IconButton>
			</Stack>
			<Stack direction="row" spacing={2}>
				<ButtonGroup
					orientation="vertical"
					color="secondary"
					aria-label="ButtonGroup"
					variant="contained"
					size="small"
				>
					<Button
						onClick={() => {
							alert("left");
						}}
					>
						left
					</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<ButtonGroup
					orientation="vertical"
					color="secondary"
					aria-label="ButtonGroup"
					variant="contained"
					size="large"
				>
					<Button
						onClick={() => {
							alert("left");
						}}
					>
						left
					</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;