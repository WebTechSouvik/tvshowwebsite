import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";

const Summry = () => {
	const [showForm, setShowForm] = useState(false);
	const ref = useRef();
	const { id } = useParams();
	const { apiData, loading } = useFetch(
		"https://api.tvmaze.com/search/shows?q=all",
	);
	const handelsubmit = (e) => {
		e.preventDefault();
		setShowForm(false);
		alert("ticket book successfully");
	};
	useEffect(() => {
		if (ref.current) {
			const parser = new DOMParser();
			let doc;
			apiData.forEach((data) => {
				if (data.show.id == id) {
					doc = parser.parseFromString(
						data.show.summary,
						"text/html",
					);
				}
			});

			const content = doc.body.innerHTML;
			ref.current.innerHTML = content;
		}
	});

	return (
		<>
			{apiData?.map((data) => {
				if (data.show.id == id) {
					return (
						<>
							<ContentWrapper>
								<div className="detalis__container">
									<div className="detalis__img__container">
										<img
											src={
												data.show.image
													? data.show.image.original
													: "/no-poster.png"
											}
											alt=""
										/>
									</div>
									<div className="detalis__info__container">
										<h2>{data.show.name}</h2>
										<div className="summry__section">
											<p className="summry__section__heading">
												Summry
											</p>
											<div
												ref={ref}
												className="summry__section__content"
											></div>
										</div>
										<div className="detalis__status__container">
											<div>
												status:{" "}
												<span>{data.show.status}</span>
											</div>
											<div>
												relase Date:{" "}
												<span>
													{data.show.premiered
														? data.show.premiered
														: "NA"}
												</span>
											</div>
										</div>
										<button
											onClick={() => setShowForm(true)}
										>
											book ticket
										</button>
									</div>
								</div>
							</ContentWrapper>

							{showForm && (
								<div className="form__container">
									<form>
										<div>
											<div>Show Name</div>
											<input
												type="text"
												value={data.show.name}
											/>
										</div>
										<div>
											<div>Day</div>
											<input
												type="text"
												value={
													data.show.schedule.days[0]
												}
											/>
										</div>

										<button
											onClick={(e) => handelsubmit(e)}
										>
											Book
										</button>
									</form>
								</div>
							)}
						</>
					);
				}
			})}
		</>
	);
};

export default Summry;
