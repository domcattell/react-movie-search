import React, { useContext, useEffect } from 'react';
import { Box } from '@material-ui/core';
import Poster from '../components/Poster';
import { FilmActions, FilmContext } from '../store/Film/actions';
import {
	Card,
	CardContent,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	Paper,
	Chip,
	AppBar,
	Toolbar,
	Container
} from '@material-ui/core';
import { Schedule, Person, Note, Star, MonetizationOn } from '@material-ui/icons';

const Film = (props) => {
	const { getFilm } = useContext(FilmActions);
	const { film } = useContext(FilmContext);
	const { filmID } = props.match.params;

	useEffect(
		() => {
			getFilm(filmID);
		},
		[ getFilm, filmID ]
	);

	return (
		<Box>

			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">Movie Search</Typography>
				</Toolbar>
			</AppBar>


			<Box p={5} display="flex" flexDirection="row" justifyContent="center">

				<Box>
					<Poster />
				</Box>

				<Box>
					<Container>
						<Typography variant="h4" gutterBottom>
							{film.Title}
						</Typography>
					</Container>

					<Container>
						<Typography variant="body2" color="textSecondary" component="p">
							{film.Plot}
						</Typography>
					</Container>

					<Paper>
						<List component="nav" aria-label="main mailbox folders">
							<ListItem>
								<Chip icon={<Schedule />} label={`Released in ${film.Year}`} color="secondary" />
							</ListItem>
							<ListItem>
								<Chip icon={<Person />} label={`Rated ${film.Rated}`} color="secondary" />
							</ListItem>
							<ListItem>
								<Chip icon={<Note />} label={`Written by ${film.Writer}`} color="secondary" />
							</ListItem>
							<ListItem>
								<Chip icon={<Note />} label={`Directed by ${film.Director}`} color="secondary" />
							</ListItem>
							<ListItem>
								<Chip icon={<Star />} label={`Metascore ${film.Metascore}`} color="secondary" />
							</ListItem>
							<ListItem>
								<Chip
									icon={<MonetizationOn />}
									label={`Made ${film.BoxOffice} at the BoxOffice`}
									color="secondary"
								/>
							</ListItem>
						</List>
					</Paper>

					<Card>
						<CardContent>
							<Typography variant="h4" gutterBottom>
								Reviews
							</Typography>
							<List />
							{film.Ratings &&
								film.Ratings.map((rating) => (
									<ListItem>
										<Typography>
											{rating.Source}
										</Typography>
                                        <Chip 
                                            color="primary"
                                            icon={<Star/>}
                                            label={rating.Value}
                                        />
									</ListItem>
								))}
						</CardContent>
					</Card>

				</Box>
			</Box>
		</Box>
	);
};

export default Film;
