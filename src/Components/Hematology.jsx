const Hematology = () => {
	return (
		<div className="container-fluid Whole-Details">
			<div className="row">
				<div className="col-12">
					<div>
						<h1 className="Whole-Title">{item.Title}</h1>
						<div>
							<img src="./Hematology.jpg" alt="Img" className="Whole-Img" />
						</div>
						<div>
							<p className="Description">
								Hematology investigations, are a group of laboratory tests that
								analyse components of the blood to assess various aspects of a
								person's health. These tests provide valuable information about
								the composition and function of blood cells and can help
								diagnose and monitor a wide range of medical conditions. Here
								are some common hematological investigations:
							</p>
						</div>
						<div className="SD-Description">
							<p>1.Complete Blood Count (CBC):</p>
							<ul>
								<li>Red Blood Cell Count (RBC)</li>
								<li>Hemoglobin (Hb)</li>
								<li>Hematocrit (Hct)</li>
								<li>White Blood Cell Count (WBC)</li>
								<li>Platelet Count (Plt)</li>
							</ul>
							<p>
								Peripheral Blood Smear (PBS): A microscopic examination of a
								blood sample to assess the size, shape, and appearance of blood
								cells. It helps diagnose conditions like anemia and blood cell
								disorders.
							</p>
							<p>
								Hemoglobin Electrophoresis: Separates different types of
								hemoglobin and is used to diagnose hemoglobinopathies such as
								sickle cell disease and thalassemia.
							</p>
							<p>Coagulation Profile: </p>
							<ul>
								<li>
									Prothrombin Time (PT): Measures the time it takes for blood to
									clot. Used to assess the function of the extrinsic coagulation
									pathway.
								</li>
								<li>
									Activated Partial Thromboplastin Time (aPTT): Measures the
									time it takes for blood to clot. Used to assess the function
									of the intrinsic coagulation pathway.
								</li>
								<li>
									International Normalized Ratio (INR): Provides a standardized
									measurement of PT and is used to monitor patients on
									anticoagulant therapy.
								</li>
							</ul>
							<p>
								{" "}
								Blood Smear Examination: Microscopic examination of a stained
								blood smear to assess the morphology of blood cells, identify
								abnormalities, and diagnose conditions such as leukemia.
							</p>
							<p>
								{" "}
								Reticulocyte Count: Measures the number of young red blood cells
								(reticulocytes) in the blood. It helps assess the bone marrow's
								ability to produce red blood cells.
							</p>
							<p>
								Erythrocyte Sedimentation Rate (ESR): Measures the rate at which
								red blood cells settle in a tube of blood and is used as a
								non-specific marker of inflammation.
							</p>
							<p>
								D-dimer: Detects the presence of blood clots by measuring a
								breakdown product of fibrin. It's used in the diagnosis of
								conditions like deep vein thrombosis (DVT) and pulmonary
								embolism (PE).
							</p>
							<p>
								Bleeding Time and Clotting Time: Assess how long it takes for
								blood to stop flowing from a small incision and the time it
								takes for blood to clot in a test tube, respectively.
							</p>
							<p> {item.SDescription10}</p>
							<p> {item.SDescription11}</p>
							<p> {item.SDescription12}</p>
						</div>

						<div className="STDescription">
							<p>
								These hematology investigations are essential for diagnosing and
								monitoring blood disorders, anemia, bleeding disorders, clotting
								disorders, leukemia, and other conditions that affect the blood
								and its components. They play a critical role in guiding medical
								treatment and interventions to ensure the well-being of
								patients.
							</p>
						</div>
						<div className="Instruments-type">
							<p>Swelab Alfa Plus - 20-PARAMETER HEMATOLOGY ANALYZER</p>
							<p>Sysmex XN 350 - 5 part Analyser</p>
						</div>
						<div className="STDescription">
							<p>
								Swelab Alfa Plus hematology analyzers combine unmatched
								reliability with maximum ease of operation. Fast and
								user-friendly, their highly-accurate results are backed up by
								built-in quality monitoring and low instrument maintenance. In
								addition, a complete system solution comprising instruments,
								reagents, and QC materials ensures outstanding performance time
								after time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
