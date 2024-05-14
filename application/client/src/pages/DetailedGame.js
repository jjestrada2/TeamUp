/*********************************************************************
Page: Detailed Game Page
Contributors: Jaycee Lorenzo
Description: Page that displayed the detailed information of a specific 
             game. The user can join a team that is available and view the 
             location of the game.
Components:
    - NavigationBar: Navigation bar for the application
    - LocationMap: Display the location of the game
    - LeftArrow: Icon for the back button
    - Footer: Footer for the application
********************************************************************/
import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import LocationMap from '../components/Location';
import { LeftArrow } from '../components/Icons';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Team1 from '../components/detailed_game/Team1';
import Team2 from '../components/detailed_game/Team2';

function DetailedGame() {
    const { gameId } = useParams();
    const [gameDetails, setGameDetails] = useState(null);
    const domain = process.env.REACT_APP_API_URL;
    const version = process.env.REACT_APP_API_VERSION;
    const url = `${domain}${version}`;

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const response = await fetch(`${url}/game/${gameId}`);
                const data = await response.json();
                setGameDetails(data);
            } catch (error) {
                console.error('Failed to fetch game details:', error);
            }
        }
        fetchGameDetails();
    }, [gameId, url]);

    if (!gameDetails) return <div>Loading...</div>; // Or any other loading state representation

    const { name, game_location, organizer, description, date_time, imageUrl } = gameDetails;
    const gameDate = new Date(date_time).toLocaleString(); // Format the date time string to a readable format

    return (
        <>
        <NavigationBar />
        <div className="min-h-screen flex flex-wrap md:flex-row">
            <header>
                <title>{name}</title>
                <link rel="icon" href="/images/TeamUp.ico" type="image/x-icon" />
            </header>
            {/* Left Screen */}
            <div className="w-full xl:w-5/12 border-r-4 border-slate-300">
                <div className="justify-left m-1 ml-2 self-center">
                    <Link to="/home">
                        <button className="rounded-full bg-primary w-16 h-12 pl-5">
                            <LeftArrow />
                        </button>
                    </Link>
                    <div className="font-extralight text-slate-700">
                        Back to home
                    </div>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-1 m-4 mt-0 pb-2 border-b-2 border-slate-300">
                    {/* Host Info */}
                    <div className="row-span-3 flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-40 rounded-full border-slate-600 flex items-center justify-center border">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold">{organizer.name}</h3>
                            <p>{organizer.email}</p>
                        </div>
                    </div>

                    {/* Game Info */}
                    <div className="row-span-3">
                        <div className="text-center mt-8 mb-2 text-5xl font-bold">{name}</div>
                        <div className="text-center text-3xl">{`${gameDetails.sport.name} Game`}</div>
                        <div className="text-center text-2xl italic">{gameDate}</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 grid-flow-col gap-2 m-4 pb-4">
                    {/* Description */}
                    <div className="row-span-3">
                        <label className="text-lg font-bold" htmlFor="desc-box">Description</label>
                        <div id="desc-box" className="w-full h-64 p-2 border rounded overflow-y-auto">
                            {description || 'No description provided.'}
                        </div>
                    </div>
                    {/* Location */}
                    <div className="row-span-3">
                        <label className="text-lg font-bold" htmlFor="loc-box">Location</label>
                        <div id="loc-box" className="w-full h-64 p-2 border rounded overflow-y-auto">
                            <LocationMap latitude={game_location.locationLatitude} longitude={game_location.locationLongitude}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Screen */}
            <div className="w-full xl:w-7/12">
                <Team1 gameID={gameId} numPlayers={gameDetails.number_of_players}/>

                <Team2 gameID={gameId} numPlayers={gameDetails.number_of_players}/>
            </div>
        </div>
        <Footer />
        </>
)}

export default DetailedGame;