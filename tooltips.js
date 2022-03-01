var className = "tooltip-box";

var parentdiv = document.getElementById("container");

function showTooltip(obj, id, html, width, height){
    if(document.getElementById(id) == null){
        var tooltipBox;
        tooltipBox = document.createElement("node");
        tooltipBox.className = className;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;

        obj.appendChild(tooltipBox);

        tooltipBox.style.width = width?width+"px":"auto";
        tooltipBox.style.height = height?height+"px":"auto";
        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";

        var left = obj.offsetLeft;
        var top = obj.offsetTop + 20;

        const rect = obj.getBoundingClientRect();

        if(rect.bottom > 500) {
            tooltipBox.style.left = left+"px";
            tooltipBox.style.bottom = 40+"px";
        } else {
            tooltipBox.style.left = left+"px";
            tooltipBox.style.top = top+"px";
        }

        // tooltipBox.style.left = left+"px";
        // tooltipBox.style.top = top+"px";

        obj.addEventListener("mouseout", function(){
            setTimeout(function(){
                document.getElementById(id).style.display = "none";
            }, 100);
        });

    } else {
        document.getElementById(id).style.display = "block";
    }
}

parentdiv.addEventListener("mouseover", function (e){
    var target = e.target;
    if(target.className === "tooltip"){
        var _html;
        var _id;
        var _width;
        switch (target.id){
            case "LUCA":
                 _id = "LUCAtip";
                 _html = "It is the last organism that is the ancestor of every modern species. It appears to have been a single-celled organism, not that different from modern-day bacterium. Existed 3.5 to 3.8 billion years ago.";
                 _width = 300;
                 break;
            case "Amorphea":
                _id = "Amorpheatip";
                _html = "This group of organisms, for the most part, have one flagellum, the “tail” in smaller organisms, like bacteria. It includes animals, choanoflagellates, and fungi. Existed 1400 million years ago.";
                _width = 300;
                break;
            case "Amoebozoa":
                _id = "Amoebozoatip";
                _html = "These organisms are mostly unicellular amoebas. However, these also include slime molds that can grow to large sizes such as Chaos amoeba. Existed 1000 million years ago.";
                _width = 300;
                break;
            case "Opisthokonta":
                _id = "Opisthokontatip";
                _html = "A common characteristic of this group is the release of sperm and spores, for animals and fungi respectively, through the posterior flagellum. Existed 1300 million years ago.";
                _width = 300;
                break;
            case "Metazoa":
                _id = "Metazoatip";
                _html = "This group belongs to the kingdom Animalia and, for the most part, share common characteristics. These include: breathing oxygen, drinking water, have an embryonic stage, and are able to move. Existed 650 million years ago.";
                _width = 300;
                break;
            case "Porifera":
                _id = "Poriferatip";
                _html = "These creatures are multicellular and have pores that allow water to circulate through them. These organisms have no circulatory, nervous, or digestive systems, relying on water to get it food and remove waste. Since it is the first to branch off the evolutionary tree, it can be referred to as the sister group of all animals. Existed 635 Million Years Ago.";
                _width = 300;
                break;
            case "Eumetazoa":
                _id = "Eumetazoatip";
                _html = "This group of species have tissue that have germ layers and working nerves because of the presence of neurons. This group is generally referred to as all animals except for sponges. Existed 635 million years ago.";
                _width = 300;
                break;
            case "Ctenophora":
                _id = "Ctenophoratip";
                _html = "This the group that includes comb jellies. These aquatic invertebrates are the largest animals that use a cilla, the comb, and can grow from a few millimeters to a meter or two. Existed 540 million years ago.";
                _width = 300;
                break;

            case "Cnidaria":
                _id = "Cnidariatip";
                _html = "The distinguishing feature of this group are their cnidocytes, or stinging cells. They are all aquatic with mesoglea, a jelly-like substance, making up their bodies. Existed 580 million years ago.";
                _width = 300;
                break;

            case "Medusozoa":
                _id = "Medusozoatip";
                _html = "These species are known for their medusa stage in their life cycle. That stage involves the shape of jellyfish, and with the exception of hydras, all medusozoa are jellyfish during their medusa phase.Existed 540 million years ago.";
                _width = 300;
                break;

            case "Anthozoa":
                _id = "Anthozoatip";
                _html = "It is a class of predatory marine invertebrates that attach themselves to seabeds. While sea anemones are mostly solitary, corals are colonial, forming enormous coral reefs. Existed 570 million years ago.";
                _width = 300;
                break;

            case "Bilateria":
                _id = "Bilateriatip";
                _html = "These animals all have bilateral symmetry during their embryonic stage and have a head and tail and a back and belly. Nearly all of these species are bilaterally symmetrical during adulthood with the exception of echinoderm. Existed 560 Million years ago.";
                _width = 300;
                break;

            case "Acoela":
                _id = "Acoelatip";
                _html = "These small invertebrates are shaped similar to flattened worms and don’t have a conventional gut. They are found all over the world in brackish and marine waters, living a benthic or bottom-dwelling lifestyle.";
                _width = 300;
                break;

            case "Nephrozoa":
                _id = "Nephrozoatip";
                _html = "This group of animals have evolved to have nerve cords. They have also gained a digestive tract and excretory organs. Existed 555 million years ago.";
                _width = 300;
                break;

            case "Protostomia":
                _id = "Protostomiatip";
                _html = "These organisms have their mouth develop before their anus, during the embryonic development. Among different protostomes, the fate of the blastopore can be variable. Existed 550 million years ago.";
                _width = 300;
                break;

            case "Deuterostomia":
                _id = "Deuterostomiatip";
                _html = "These species are characterized by their anus being developed before their mouth. However, deuterostomy has been discovered in protostomes. Existed 540 million years ago.";
                _width = 300;
                break;

            case "Echinodermata":
                _id = "Echinodermatatip";
                _html = "These marine phylum includes starfish, sea lilies, sea cucumbers, sea urchins, and sand dollars and are found on seabeds at every ocean depth. They are also the largest phylum with no terrestrial or freshwater members. Existed 530 million years ago.";
                _width = 300;
                break;

            case "Ecdysozoa":
                _id = "Ecdysozoatip";
                _html = "This group of animals go through ecdysis. Ecdysis is the molting of that organism’s exoskeleton. Existed 545 million years ago.";
                _width = 300;
                break;

            case "Nematoda":
                _id = "Nematodatip";
                _html = "These roundworms can be found almost anywhere, from ocean trenches to the polar ice caps. They, unlike flatworms, also have a tubular digestive two openings at each end of the flatworm. Existed 535 million years ago.";
                _width = 300;
                break;

            case "Tardigrada":
                _id = "Tardigradatip";
                _html = "Water bears are eight-legged micro animals, and they are some of the most resilient creatures on the planet, known to survive extreme  circumstances like extreme pressure and temperatures. Most tardigrades have a diet of plants and bacteria, however, some are known to eat smaller water bears. Existed 500 million years ago.";
                _width = 300;
                break;

            case "Onychophora":
                _id = "Onychophoratip";
                _html = "This phylum includes soft, multiple legged panarthropods. They eat small insects by squirting their adhesive slime. Existed 100 million years ago..";
                _width = 300;
                break;

            case "Arthropoda":
                _id = "Arthropodatip";
                _html = "These invertebrates have cuticles, the main part of exoskeletons, made of chitin. Both of their body systems, external, exoskeleton, and internal, nervous system, are arranged in rows branching off horizontally. Existed 541 million years ago.";
                _width = 300;
                break;

            case "Chelicerata":
                _id = "Cheliceratatip";
                _html = "The distinct characteristic of these organisms is their chelicerae, appendages that are in front of the mouth. Most chelicerates use bristles to track down prey, however, some use their eyesight to use their pincers to kill the prey. Existed 508 million years ago.";
                _width = 300;
                break;

            case "Xiphosura":
                _id = "Xiphosuratip";
                _html = "; These creatures have barely changed over the years, the most notable being their abdomen being fused into one unit. These species have 4 eyes and 6 pairs of legs, the first 5 ending in pincers. Existed 445 million years ago.";
                _width = 300;
                break;

            case "Arachnida":
                _id = "Arachnidatip";
                _html = "Almost all full-grown arachnids have eight legs, compared to most other insects having six. Some of them have their front legs used as sensory organs, while others have larger appendages to act like an extra pair of limbs. Existed 435 million years ago.";
                _width = 300;
                break;

            case "Mandibulata":
                _id = "Mandibulatatip";
                _html = "These creatures are known for their distinctive mandibles, or jaws. Mandibulates are the largest and most varied group of arthropods.";
                _width = 300;
                break;

            case "Myriapoda":
                _id = "Myriapodatip";
                _html = "These species are known for their segmented bodies and large number of legs. They actually have to molt repeatedly to gain their appendages.  Existed 420 million years ago.";
                _width = 300;
                break;

            case "Pancrustacea":
                _id = "Pancrustaceatip";
                _html = "These creatures have 4 cones in their ommatidia, compound eyes, compared to other arthropods. This group is also known as tetraconata, referring to their 4 cones. Existed 518 million years ago.";
                _width = 300;
                break;

            case "Branchiopoda":
                _id = "Branchiopodatip";
                _html = "These species are quite small and mostly feed off of plankton. These animals can be characterized by their gills on all parts of their body.";
                _width = 300;
                break;

            case "Malacostraca":
                _id = "Malacostracatip";
                _html = "This is the largest class of pan-crustaceans and known for their body plan of  20 appendages. They have colonized salt and fresh water environments and are found on land.";
                _width = 300;
                break;

            case "Eucarida":
                _id = "Eucaridatip";
                _html = "This group contains species that have the front of their body fused to their thorax. They also have stalked eyes that allow them to have quite good vision. Existed 385 million years ago.";
                _width = 300;
                break;

            case "Amphipoda":
                _id = "Amphipodatip";
                _html = "These are small crustaceans that don’t have the front part that shrimp have, a carapace. They are found in most marine environments and scavenge for food. Existed 133 million years ago.";
                _width = 300;
                break;

            case "Isopoda":
                _id = "Isopodatip";
                _html = "All species of this order have rigid exoskeletons, 4 antennae, and 12 total pairs of appendages. These creatures all have various habitats, feeding methods, and abilities. Existed 300 million years ago.";
                _width = 300;
                break;

            case "Hexapoda":
                _id = "Hexapodatip";
                _html = "These creatures have 3 pairs of legs, unlike other arthropods, who usually have more. These species can be sizes of .5 mm to over 300 mm long. Existed 411 million years ago.";
                _width = 300;
                break;

            case "Collembola":
                _id = "Collembolatip";
                _html = "These species like moist environments and are omnivorous. They are usually less than 6 mm long and are able to reduce their size by 30% through molting under the right conditions.Existed 405 million years ago.";
                _width = 300;
                break;

            case "Insecta":
                _id = "Insectatip";
                _html = "Insects are characterized by having a chitin exoskeleton, 3 pairs of legs, 1 pair of antennae, and a 3 part body plan. They are the most diverse group of animals and are projected to make up 90% of the species on Earth. Existed 350 million years ago.";
                _width = 300;
                break;

            case "Zygentoma":
                _id = "Zygentomatip";
                _html = "These creatures are notable for having three long “tails” that are sensory organs. Their bodies are small and flattened and have small or, in some cases, no eyes. Existed 300 million years ago.";
                _width = 300;
                break;

            case "Pterygota":
                _id = "Pterygotatip";
                _html = "These insects are able to fly or had ancestors with wings. This makes up almost all insects. Existed 325 million years ago.";
                _width = 300;
                break;

            case "Odonata":
                _id = "Odonatatip";
                _html = "They start out as aquatic larvae, known as nymphs. Dragonflies can hardly walk, using their legs mainly to catch insects. Existed 310 million years ago.";
                _width = 300;
                break;

            case "Neoptera":
                _id = "Neopteratip";
                _html = "These insects are able to flex their wings over their abdomen. This group contains most of the orders of insects. Existed 370 million years ago.";
                _width = 300;
                break;

            case "Hemiptera":
                _id = "Hemipteratip";
                _html = "These insects are scientifically defined as bugs, compared to other insects having bug in their name but being a fly or beetle. Most are herbivores, however, some feed on blood and other smaller insects. Existed 307 million years ago.";
                _width = 300;
                break;

            case "Polyneoptera":
                _id = "Polyneopteratip";
                _html = "These insects do not go through metamorphosis. They have their wings develop outside their bodies while they’re nymphs. Existed 340 million years ago.";
                _width = 300;
                break;

            case "Dictyoptera":
                _id = "Dictyopteratip";
                _html = "These creatures have short ovipositors, despite their ancestors having long ones. Ovipositors are the organ that insects use to lay eggs. Existed 300 million years ago.";
                _width = 300;
                break;

            case "Orthoptera":
                _id = "Orthopteratip";
                _html = "These insects don’t undergo complete metamorphosis. They are known for their stridulation, where they  rub their wings against their legs. Existed 330 million years ago.";
                _width = 300;
                break;

            case "Holometabola":
                _id = "Holometabolatip";
                _html = "These creatures go through a radical transformation, with each stage changing wildly from the other. This is the most diverse superorder, with over a million species in it. Existed 320 million years ago.";
                _width = 300;
                break;

            case "Lepidoptera":
                _id = "Lepidopteratip";
                _html =  "This group has butterflies and moths, who can be identified by scales covering their bodies. Their color schemes are very recognizable, with a large variety of colors. Each color scheme serves a specific purpose, whether to hide or warn others that it’s poisonous. Existed 200 million years ago.";
                _width = 300;
                break;

            case "Coleoptera":
                _id = "Coleopteratip";
                _html = "Beetles are very wide-spread, accounting for around 40% of all insects and 25% of all animal species. They could be distinguished by their front pair wings hardening into cases covering their back pair of wings. Existed 299 million years ago.";
                _width = 300;
                break;

            case "Hymenoptera":
                _id = "Hymenopteratip";
                _html = "These insects have two large compound eyes and, for some, a large, skinny proboscis to drink nectar. These species can be parasitic and specialized ovipositors to plant eggs in usually inaccessible areas. Existed 235 million years ago."
                _width = 300;
                break;

            case "Diptera":
                _id = "Dipteratip";
                _html = "This group has only one pair of wings, with the back wings used for more advanced steering. It is estimated to have 1,000,000 species, however, only 125,000 species have been identified. Existed 245 million years ago.";
                _width = 300;
                break;

            case "Spiralia":
                _id = "Spiraliatip";
                _html = "These creatures have spiral cleavage. Cleavage is the division of cells in the early embryo. Existed 541 million years ago.";
                _width = 300;
                break;

            case "Platyhelminthes":
                _id = "Platyhelminthestip";
                _html = "They are simple bilaterally symmetrical, soft-bodied creatures. They have no respiratory and digestive systems and have only one opening on their bodies.";
                _width = 300;
                break;

            case "Trochozoa":
                _id = "Trochozoatip";
                _html = "These creatures are worm-like forms. The creatures in this group have similar embryonic development.";
                _width = 300;
                break;

            case "Annelida":
                _id = "Annelidatip";
                _html = "These species have a diverse variety of habitats that they live in, from land to oceanic hydrothermal vents. Each of the segments has organs and lateral protrusions that help the animal move.Existed 460 million years ago.";
                _width = 300;
                break;

            case "Mollusca":
                _id = "Molluscatip";
                _html = "These creatures are recognizable by their pallium, or the large protrusions that is its “head”, which contains their nervous system. This is the largest marine phylum, containing more than 20% of all ocean creatures. Existed 521 million years ago.";
                _width = 300;
                break;

            case "Polyplacophora":
                _id = "Polyplacophoratip";
                _html = "These species have shells that are divided into eight different plates that overlap slightly, allowing for mobility and protection. Existed 400 million years ago.";
                _width = 300;
                break;

            case "Bivalvia":
                _id = "Bivalviatip";
                _html = "These creatures have two-hinged shells that result in them not heads and other organs. They are filter feeders, with some that attach themselves to the seafloor or other rocks, and others that can actually swim. Existed 500 million years ago.";
                _width = 300;
                break;

            case "Gastropoda":
                _id = "Gastropodatip";
                _html = "Gastropods are a highly diverse group of invertebrates, with every group having different adaptations and traits.Existed 500 million years ago.";
                _width = 300;
                break;

            case "Heterobranchia":
                _id = "Heterobranchiatip";
                _html = "This group of gastropods is pretty diverse, which contains three major  groups. The lower Heterobranchia contains shelled freshwater creatures, while the Opisthobranch has marine creatures, with and without a shell. Pulmonates have an air-breathing organ that allows for terrestrial living. Existed 400 million years ago.";
                _width = 300;
                break;

            case "Caenogastropoda":
                _id = "Caenogastropodatip";
                _html = "This is the most diverse group of gastropods, being extremely ecologically diverse. These gastropods generally have twisted shells and make up more than 50% of all gastropods. Existed 350 million years ago.";
                _width = 300;
                break;

            case "Cephalopoda":
                _id = "Cephalopodatip";
                _html = "Cephalopods are agreed upon to be the most intelligent invertebrates, along with a very complex nervous system. Most of them are able to squirt ink and a few are able to change their color.  Existed 500 million years ago.";
                _width = 300;
                break;

            case "Nautilidae":
                _id = "Nautilidaetip";
                _html = "These “living fossils” have barely changed over a few million years. They have a distinct curved shell and cirri, long and soft appendages, to grasp different items. Existed 230 million years ago.";
                _width = 300;
                break;

            case "Coleoidea":
                _id = "Coleoideatip";
                _html = "These cephalopods lost their shell, allowing them to move more freely. Many of them have altered or lost a pair of arms from their original amount. Existed 400 million years ago.";
                _width = 300;
                break;

            case "Octopodiformes":
                _id = "Octopodiformestip";
                _html = "These well-known creatures have their distinct eight appendages, used for a large variety of tasks. They can vary in size and weight from 110 pounds to less than an ounce. Existed 280 million years ago.";
                _width = 300;
                break;

            case "Decapodiformes":
                _id = "Decapodiformestip";
                _html = "This group is made of squid, who are generally longer and have a beak, and cuttlefish, who have special bones that preserve buoyancy. Colossal squids have the largest eyes of any animal and several types of cuttlefish are venomous. Existed 400 million years ago.";
                _width = 300;
                break;

            case "Chordata":
                _id = "Chordatatip";
                _html = "These creatures are characterized by their notochord, the precursor to the backbone. They also posses a post-anal tailbone, just like the one in humans. Existed 530 million years ago.";
                _width = 300;
                break;

            case "Cephalochordata":
                _id = "Cephalochordatatip";
                _html = "They are found in tropical and warm waters, with the help of their notochords, adults can swim with tides along coasts. Lancelets are very small, only a few centimeters long, due to their lack of a sturdy skeleton. Existed 510  million years ago.";
                _width = 300;
                break;

            case "Olfactores":
                _id = "Olfactorestip";
                _html = "This group brings the introduction of olfactory systems. This system brings around the sense of smell and development of nostrils. Existed 525 million years ago.";
                _width = 300;
                break;

            case "Tunicata":
                _id = "Tunicatatip";
                _html = "Mymomeres are blocks of skeletal tissue found mostly in chordates. All tunicates are marine creatures and include ascidians, sea squirts, sea pork, sea livers, and sea tulips. Existed 520 million years ago.";
                _width = 300;
                break;

            case "Vertebrata":
                _id = "Vertebratatip";
                _html = "All vertebrates have nervous tissue around their vertebral column. They also all have their mouth on the anterior, front side, and tails are formed with the spinal cord and vertebrae. Existed 515 million years ago.";
                _width = 300;
                break;

            case "Gnathostomata":
                _id = "Gnathostomatatip";
                _html = "These creatures account for 99% of all vertebrates and have around 60,000 species. In addition to jaws, they also have true teeth, even-numbered appendages, and development of their cellular anatomy. Existed 445 million years ago.";
                _width = 300;
                break;

            case "Chondrichthyes":
                _id = "Chondrichthyestip";
                _html = "This group of fish have their skeletal system made of cartilage. Cartilage is a rubbery and elastic tissue that most vertebrates have, however, most of  their bones are not made of cartilage and include sharks and rays. Existed 430 million years ago.";
                _width = 300;
                break;

            case "Euteleostomi":
                _id = "Euteleostomitip";
                _html = "These vertebrates have bony skeletal systems and lungs, which have evolved into swim bladders in marine species. They make up 90% of living vertebrates. Existed 420 million years ago.";
                _width = 300;
                break;

            case "Actinopterygii":
                _id = "Actinopterygiitip";
                _html = "These fish have fins that are made of webs of skin that are supported by bone. The bones are similar to that in “hands” of many other creatures, showing the link between the many vertebrates. Existed 415 million years ago.";
                _width = 300;
                break;

            case "Polypteriformes":
                _id = "Polypteriformestip";
                _html = "These fish have very unique dorsal fins, having from seven to eighteen finlets covering their back. They live in African freshwater rivers and swamps and prey on smaller animals. Existed 140 million years ago.";
                _width = 300;
                break;

            case "Actinopteri":
                _id = "Actinopteritip";
                _html = "This group is very similar to the Actinopterygii. They, however, do not include the Polypteriformes.";
                _width = 300;
                break;

            case "Acipenseriformes":
                _id = "Acipenseriformestip";
                _html = "These fish have long slender bodies and live in rivers. These large fish are bottom feeders that eat small animals. Existed 200 million years ago.";
                _width = 300;
                break;

            case "Neopterygii":
                _id = "Neopterygii";
                _html = "These fish did better than their ancestors due to their lighter skeletons and scales and their more powerful and efficient jaws. Along with their superior movement of their dorsal and anal fins, these fish were able to dominate the waters. Existed 251 million years ago.";
                _width = 300;
                break;

            case "Teleostei":
                _id = "Teleosteitip";
                _html = "This is the largest group of fish, containing more than 95% of all fish species. They come in a variety of shapes and sizes, from anglerfish to seahorses to clownfish to pufferfish. Existed 240 million years ago.";
                _width = 300;
                break;

            case "Holostei":
                _id = "Holosteitip";
                _html = "These fish are long and skinny with multiple pairs of fins. They are a mixture of teleosts and sharks, with species showing characteristics of both groups in different amounts. Existed 240 million years ago.";
                _width = 300;
                break;

            case "Sarcopterygii":
                _id = "Sarcopterygiitip";
                _html = "These fish have their fins attached to their bodies with one bone, on the end being a scaly mass. Their pectoral and pelvic fins will evolve into limbs for other animals down the line. Existed 415 million years ago.";
                _width = 300;
                break;

            case "Latimeria":
                _id = "Latimeriatip";
                _html = "These living fossils are very rare, with only two living species that are both very endangered. They are opportunistic predators that have a unique ability to slow their metabolism when there is a lack of food. Existed 20,000 thousand years ago.";
                _width = 300;
                break;

            case "Dipnoi":
                _id = "Dipnoitip";
                _html = "These remarkable fish are able to breathe on land using their lungs. They are the closest living ancestor to tetrapods. Existed 410 million years ago.";
                _width = 300;
                break;

            case "Tetrapod":
                _id = "Tetrapodtip";
                _html = "Despite early tetrapods being marine, they made the difficult journey onto, which causes it to be named one of the most amazing evolutionary changes. Modern tetrapods don’t necessarily have four visible limbs, such as snakes who have remnants of their limbs as part of their skeleton. Existed 355 million years ago.";
                _width = 300;
                break;

            case "Amphibia":
                _id = "Amphibiatip";
                _html = "These species all undergo a metamorphosis change, needing water to lay their legs. Due to their reliance on water, almost all amphibians live near water to keep themselves from dehydrating. Existed 350 million years ago.";
                _width = 300;
                break;

            case "Gymnophiona":
                _id = "Gymnophionatip";
                _html = "These snake-like creatures are very adapted for burrowing, using their snout to push through dirt and have only light-perception vision. They have segmented skin that can secrete toxins, and they can still swim with their tail acting as an oar or anchor. Existed 200 million years ago.";
                _width = 300;
                break;

            case "Batrachia":
                _id = "Batrachiatip";
                _html = "These amphibians are the only invertebrates that have the ability to move their eyes up and down. They also share similar metaphorical stages, such as their tadpoles. Existed 250 million years ago.";
                _width = 300;
                break;

            case "Anura":
                _id = "Anuratip";
                _html = "Frogs are no-tailed, short amphibians that can have skin that secretes toxins. Toads don’t scientifically exist, their main distinction being informal regarding their bumpy skin and more terrestrial lifestyle. Existed 200 million years ago.";
                _width = 300;
                break;

            case "Caudata":
                _id = "Caudatatip";
                _html = "These lizard-like animals rely on moist environments and usually have bright coloring to advertise their toxicity. They can regenerate their limbs, live in marine, near bodies in water, or entirely terrestrial lifestyles, and have many different diets. Existed 160 million years ago.";
                _width = 300;
                break;

            case "Amniota":
                _id = "Amniotatip";
                _html = "Compared to amphibians and other anamniotes, amniotes had an easier time reproducing because they could lay their eggs on land. It allowed for a larger diversity of environments to be conquered by animals, since they now didn’t rely on water to reproduce.  Existed 320 million years ago.";
                _width = 300;
                break;

            case "Sauropsida":
                _id = "Sauropsidatip";
                _html = "This group is basically identical to the Reptilia class. They range in various sizes from tiny geckos to the great saltwater crocodiles. Existed 310 million years ago.";
                _width = 300;
                break;

            case "Lepidosauria":
                _id = "Lepidosauriatip";
                _html = "These reptiles have scales made of keratin that can be shed all at once. They are also able to self-amputate their tail, however the regrowth may not always be complete. Existed 240 million years ago.";
                _width = 300;
                break;

            case "Rhynchocephalia":
                _id = "Rhynchocephaliatip";
                _html = "Tuataras have a special “third eye” that can sense changes in light. They also don’t have roots for their teeth since they are connected right into their jaw. Existed 230 million years ago.";
                _width = 300;
                break;

            case "Squamata":
                _id = "Squamatatip";
                _html = "This large order of reptiles have the ability to jaws more freely, such as in snakes. They have a large range of sizes from dwarf geckos, 0.63 in, to green anacondas, 17.1 ft. Existed 200 million years ago.";
                _width = 300;
                break;

            case "Gekkota":
                _id = "Gekkotatip";
                _html = "More than half of geckos have adhesive footpads, allowing them to stick to many surfaces. Almost all of them, also, don’t have eyelids, causing them to lick their eyes to keep them moist. Existed 110 million years ago.";
                _width = 300;
                break;

            case "Unidentata":
                _id = "Unidentatatip";
                _html = "All of these species have one single “tooth” they use to break out of their egg. This group includes almost all types of lizards, with the exception of geckos and tuataras.";
                _width = 300;
                break;

            case "Scincidae":
                _id = "Scincidaetip";
                _html = "Skinks are lizard-like reptiles that have short, stout legs that burrow through the ground. They are usually insectivores, however, some of the larger ones can feed on lizards and small rodents. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Episquamata":
                _id = "Episquamatatip";
                _html = "A decent number of reptiles in this group are venomous. Venomous meaning that they inject venom into other organisms through biting or stinging.";
                _width = 300;
                break;

            case "Iguania":
                _id = "Iguaniatiptip";
                _html = "These lizards are pretty much exclusively found in the western hemisphere, however, many are also found on various islands such as Madagascar and Fiji Islands. They are mainly arboreal, tree dwelling, and have fleshy tongues that aren’t prehensile, grasping, with a few exceptions. Existed 180 million years ago.";
                _width = 300;
                break;

            case "Serpentes":
                _id = "Serpentestip";
                _html = "These limb-less reptiles have highly mobile jaws and organs that are placed one in front of the other, due to long and skinny bodies. They are carnivorous, and quite a few are able to use venom to catch their prey. Existed 90 million years ago.";
                _width = 300;
                break;

            case "Anguimorpha":
                _id = "Anguimorphatip";
                _html = "This group includes a lot of the dinosaur-looking lizards such as gila monsters, monitor lizards, and crocodile lizards. This group also contains alligator lizards, glass lizards, and numerous other lizards that either have limbs or are limbless. Existed 80 million years ago.";
                _width = 300;
                break;

            case "Archelosauria":
                _id = "Archelosauriatip";
                _html = "This group connects turtles/tortoises and crocodiles and birds. They have either sharp and hollow teeth, crocodiles, or beaks, turtles and birds. Existed 260 million years ago."
                _width = 300;
                break;

            case "Testudine":
                _id = "Testudinetip";
                _html = "Turtle shells are made of bone from their rib cage; the shell’s rigidness depends on the type of turtle. Box turtle shells are just one unit, while softshell turtles have few bones and leatherbacks have none. Turtles are quite versatile creatures, having evolved to live in the ocean, deserts, and most of the places near the equator. Existed 160 million years ago.";
                _width = 300;
                break;

            case "Archosauria":
                _id = "Archosauriatip";
                _html = "These reptiles have more holes in their skull, meaning they would weigh a lot less. They also have their teeth more securely connected to their jaw, preventing them from falling out as easily. Existed 245 million years ago.";
                _width = 300;
                break;

            case "Crocodylia":
                _id = "Crocodyliatip";
                _html = "These reptiles can grow to be quite large, are predatory, and are all semi-aquatic, with some being able to challenge sharks in the open ocean. They have thick and hard scales and are able to take down large prey such as wildebeest and young elephants with their powerful jaws and sharp teeth. Existed 80 million years ago.";
                _width = 300;
                break;

            case "Dinosauria":
                _id = "Dinosauriatip";
                _html = "These creatures ruled the Earth 200 million years ago and almost completely died out 65 million years ago. They evolved to have a large variety of traits and their main common trait was their scaly skin and lizard-like appearance. Existed 230 million years ago.";
                _width = 300;
                break;

            case "Saurischia":
                _id = "Saurischiatip";
                _html = "These dinosaurs have different bone structures, such as that in their pelvis. Their bones were also hollow, making them weaker but also lighter. Existed 225 million years ago.";
                _width = 300;
                break;

            case "Theropoda":
                _id = "Theropodatip";
                _html = "These dinosaurs are quite similar to birds, now gaining even similar bone structures. They also share with birds the behavior of taking care of their eggs in nests. Existed 220 million years ago.";
                _width = 300;
                break;

            case "Pennaraptora":
                _id = "Pennaraptoratip";
                _html = "These organisms have developed feathers. These feathers are forming complex appendages that bear resemblance to wings. Existed 165 million years ago.";
                _width = 300;
                break;

            case "Avialae":
                _id = "Avialaetip";
                _html = "These creatures now have independently evolved flight or at least gliding. These mechanics are very different from the flight mechanisms of insects. Existed 155 million years ago.";
                _width = 300;
                break;

            case "Aves":
                _id = "Avestip";
                _html = "Birds are warm-blooded organisms that lay legs. Most of this group are able to fly, with a few exceptions. They have spread far across the globe inhabiting most areas of the world. Existed 72 million years ago.";
                _width = 300;
                break;

            case "Palaeognathae":
                _id = "Palaeognathaetip";
                _html = "These birds are either flightless or have very limited flight capabilities. They also have more primitive and reptilian jaw structures compared to other types of birds. Existed 60 million years ago.";
                _width = 300;
                break;

            case "Neognathae":
                _id = "Neognathaetip";
                _html = "These birds generally use their wings and fly a lot more than other birds like ostriches and emus. Neognathaes also have more modern jaw bones compared to Palaeognathaes. Existed 70 million years ago.";
                _width = 300;
                break;

            case "Galloanserae":
                _id = "Galloanseraetip";
                _html = "This group contains waterfowls, such as duck, geese, and swans, and gamefowl, such as chicken, turkeys, quails, and peacocks. They don’t rely on flight that much, mostly just picking up food with their beaks. Existed 65 million years ago.";
                _width = 300;
                break;

            case "Neoaves":
                _id = "Neoavestip";
                _html = "This group of birds contains 95% of all species of birds. This group has a large diversity of species, adapting to countless environments. Existed 60 million years ago.";
                _width = 300;
                break;

            case "Mirandornithes":
                _id = "Mirandornithestip";
                _html = "This group of semi-aquatic birds with long necks and eat small aquatic prey. They have numerous similarities with each other in their skeletal structure. Existed 20 million years ago.";
                _width = 300;
                break;

            case "Columbimorphae":
                _id = "Columbimorphaetip";
                _html = "These small birds have thick bodies and short necks. They are also related to the dodo bird, sharing multiple physical attributes. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Gruiformes":
                _id = "Gruiformestip";
                _html = "These birds are quite widespread, colonizing all the continents except Antarctica. They all have quite long legs and long necks that are sometimes curled up. 55 million years ago.";
                _width = 300;
                break;

            case "Aequornithes":
                _id = "Aequornithestip";
                _html = "These birds are highly aquatic, relying on the water and adapting heavily to its resources. This group includes penguins, albatross, pelicans, looms, herons, storks, and auks. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Accipitrimorphae":
                _id = "Accipitrimorphaetip";
                _html = "This group is made of diurnal birds of prey. It contains eagles, hawks, osprey, secretary birds, and vultures. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Strigiformes":
                _id = "Strigiformestip";
                _html = "This group of birds are nocturnal birds of prey that are well known for their rotatable neck and round faces. They are able to fly silently and feast on rodents and small mammals. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Australaves":
                _id = "Australavestip";
                _html = "This group of birds includes the types of falcons, a medium-small bird of prey. It also contains parrots and song or perching birds, like macaws and blue jays. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Mammalia":
                _id = "Mammaliatip";
                _html = "These species have developed milk for their young ones to consume during nursing periods. They have also developed fur or hair to keep them warm. Existed 225 million years ago.";
                _width = 300;
                break;

            case "Monotremata":
                _id = "Monotrematatip";
                _html = "These mammals stand out because of their egg laying abilities. They also have differences in their internal body systems compared to other mammals. Existed 135 million years ago.";
                _width = 300;
                break;

            case "Ornithorhynchidae":
                _id = "Ornithorhynchidaetip";
                _html = "Platypuses are well known for their distinct body characteristics, due to their beaver tail, webbed feet, and duck bill. Males have venomous ankle spurs that are used to defend themselves. Existed 9 million years ago.";
                _width = 300;
                break;

            case "Tachyglossidae":
                _id = "Tachyglossidaetip";
                _html = "These small mammals look like a mixture of hedgehogs and anteaters, however they are not related to either of them. They have a diet of mainly ants and termites, using their mouths to collect their meals. Existed 15 million years ago.";
                _width = 300;
                break;

            case "Theria":
                _id = "Theriatip";
                _html = "These mammals are characterized by their external ears and their process of giving birth to live young. They share a number of differences with monotremes, most notably their birth processes. Existed 160 million years ago.";
                _width = 300;
                break;

            case "Marsupialia":
                _id = "Marsupialiatip";
                _html = "Marsupials are known for their pouches, in which they carry and nurse their live young. They are mainly found in Australia and the islands surrounding it, however, they are a few species in the Americas. Existed 70 million years ago.";
                _width = 300;
                break;
                
            case "Didelphimorphia":
                _id = "Didelphimorphiatip";
                _html = "These small marsupials have prehensile tails, opposable digits, and have the ability of feigning death. They have very versatile diets, eating things from roaches and small insects to human and dog food they find in neighborhoods. Existed 20 million years ago.";
                _width = 300;
                break;

            case "Dasyuromorphia":
                _id = "Dasyuromorphiatip";
                _html = "Many marsupials in this group eat insects, or for Tasmanian Devils, carrion. This group contains quolls, a cat and squirrel mix, Tasmanian Devils, fierce small dog-like creatures, and numbats, lean fox-squirrel hybrids. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Diprotodontia":
                _id = "Diprotodontiatip";
                _html = "These marsupials are mainly herbivores, with some omnivores and insectivores.They have two large teeth on their lower jaw and have two of their toes fused together on their foot. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Macropodiformes":
                _id = "Macropodiformestip";
                _html = "Kangaroos have large and long feet used for jumping and a strong tail for balance; tree kangaroos have smaller bodies to adapt to their lives in trees. Wallabies look and act similar to kangaroos, albeit they are quite smaller. Existed 25 million years ago.";
                _width = 300;
                break;

            case "Vombatiformes":
                _id = "Vombatiformestip";
                _html = "Wombats are small, chunky, and chubby creatures that like to dig tunnels and have a backwards facing pouch to avoid getting dirt in it while it is digging. Koalas are medium sized mammals that have gray-ish fur, round noses, sharp claws, and live in eucalyptus forests, due to their diet of mainly eucalyptus leaves. Existed 25 million years ago.";
                _width = 300;
                break;

            case "Phalangeriformes":
                _id = "Phalangeriformestip";
                _html = "These small to medium sized marsupials are usually nocturnal and spend most of their time in trees. Possums can be confused with opossums but there are types of possums that look completely different from opossums. Gliders are able to glide between trees with the help of their skin between their limbs. Existed 27 million years ago.";
                _width = 300;
                break;

            case "Eutheria":
                _id = "Eutheriatip";
                _html = "These mammals have lost bones near their pelvis, allowing their abdomen to expand more during pregnancy. They also have several skeletal differences compared to non-eutherians. Existed 155 million years ago.";
                _width = 300;
                break;

            case "Atlantogenata":
                _id = "Atlantogenatatip";
                _html = "All of these mammals came from a common ancestor that evolved in Africa, resulting in a lot of these species appearing in Africa. The name means African mammal and strange joints. Existed 65 million years ago.";
                _width = 300;
                break;

            case "Xenarthra":
                _id = "Xenarthratip";
                _html = "These mammals have different skeletal structures, causing scientists to believe that they are more primitive than other mammals. They also have single-color vision and very slow metabolic rates. Existed 60 million years ago.";
                _width = 300;
                break;

            case "Pilosa":
                _id = "Pilosatip";
                _html = "Sloths are slow-moving, tree dwelling mammals that have long claws and fur and eat low-nutrient leaves. Anteaters are quite large creatures with a very long tongue, sharp claws to dig for insects, and, in most anteaters, a prehensile tail. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Cingulata":
                _id = "Cingulatatip";
                _html = "These mammals have armor made of overlapping plates of keratin. They are adept at digging and feed on small insects and other invertebrates.";
                _width = 300;
                break;

            case "Afrotheria":
                _id = "Afrotheriatip";
                _html = "Most of these animals currently live in Africa. They have evolved to fill niches in an island Africa, such as small “rodents”, larger herbivores, and medium-sized insectivores. Existed 63 million years ago.";
                _width = 300;
                break;

            case "Afroinsectivora":
                _id = "Afroinsectivoratip";
                _html = "Elephant shrews are small insectivores that long snouts. Tenrecs are also small insectivores, however, they have small spines along their bodies. Golden moles are small balls of fur that burrow through the ground, causing their small eyes to be covered by fur. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Tubulidentata":
                _id = "Tubulidentatatip";
                _html = "These medium-sized, nocturnal mammals eat termites by using their large claws to dig them out and their long tongue to collect its meal. They use their long snouts to search for food and use their ears to listen for predators. Existed 20 million years ago.";
                _width = 300;
                break;

            case "Paenungulata":
                _id = "Paenungulatatip";
                _html = "These mammals have a modified skeletal system compared to other Afrotheria. They also have developed more prominent incisors. Existed 60 million years ago.";
                _width = 300;
                break;

            case "Sirenia":
                _id = "Sireniatip";
                _html = "These large, chunky mammals are commonly referred to as “sea cows”, due to their body shape and diet of seagrass. They live in warmer, more coastal rivers, closer to the equator. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Proboscidea":
                _id = "Proboscideatip";
                _html = "Elephants are the largest land animals on the planet, weighing over 8,000 pounds. Their trunks are very mobile, allowing elephants to grab and hold onto many different objects. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Hyracoidea":
                _id = "Hyracoideatip";
                _html = "These small furry creatures have short tails and ears. They eat vegetation with their molars and their front incisors are large and continually grow. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Boreoeutheria":
                _id = "Boreoeutheriatip";
                _html = "Most of the mammals of this group have scrotums that appear in male species. The scrotum is located near the male urethra and is only not there in a select few Boreoeutherian mammals. Existed 65 million years ago.";
                _width = 300;
                break;

            case "Laurasiatheria":
                _id = "Laurasiatheriatip";
                _html = "This group has no anatomical similarities, however, they have similar genome sequencing. This order originates from the supercontinent Laurasia, giving the order its name. Existed 60 million years ago.";
                _width = 300;
                break;

            case "Perissodactyla":
                _id = "Perissodactylatip";
                _html = "These mammals all have an odd-numbered amount of toes on their feet and includes horse, zebras, rhinos, and tapirs. Tapirs live in jungles have short prehensile snouts with a body of a small rhino. Rhino are quite mammals that bear their iconic horns, made of keratin. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Pholidota":
                _id = "Pholidotatip";
                _html = "Pangolins are medium-sized mammals that have keratin scales along their bodies. They also have a long tongue and claws used to eat ants, termites, and other insects. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Artiodactyla":
                _id = "Artiodactylatip";
                _html = "These mammals have an odd number of toes on their feet. They also, except for pigs/peccaries, have multi-chambered stomachs to digest plant matter. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Camelidae":
                _id = "Camelidaetip";
                _html = "These mammals have slender legs and necks and are able to move two parts of their upper lip independently. Camel humps store fatty tissue and all members of Camelidae can spit. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Suidae":
                _id = "Suidaetip";
                _html = "These stout mammals have upper incisors, compared to other even-toed ungulates who only have incisors on the bottom jaw. They have tusks used for defense and acute senses of smell but bad sense of sight. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Hippopotamidae":
                _id = "Hippopotamidaetip";
                _html = "These large, semi-aquatic creatures have barrel-shaped bodies and a large and wide mouth that has sharp tusks. They are dehydrated quickly and come out to graze at night, however, they are extremely aggressive and dangerous. Existed 15 million years ago.";
                _width = 300;
                break;

            case "Cetacea":
                _id = "Cetaceatip";
                _html = "These large marine mammals are very intelligent, using that to perform complicated social behaviors with each other. Many cetaceans have echolocation, allowing them to “see” objects in murky or dark water quite clearly. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Ruminantia":
                _id = "Ruminantiatip";
                _html = "These mammals have multi-chambered stomachs that make them regurgitate and rechew semi-degraded food. This allows them to gain nutrients from plant-based foods more efficiently. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Giraffidae":
                _id = "Giraffidaetip";
                _html = "These mammals, despite the differences in appearance, share their long tongue and ossicones, horns covered by skin. Giraffes live in the open sahara, using their long necks to eat high vegetation, while Okapi live in dense, African forests, on low-lying shrubs, leaves, berries, and ferns. Existed 20 million years ago.";
                _width = 300;
                break;

            case "Bovidae":
                _id = "Bovidaetip";
                _html = "These mammals tend to be quite large and have blunt snouts and a pair of horns, varying in sizes and shapes. They use these mainly for mating but, in some cases, they can be used in self-defense. Existed 20 million years ago.";
                _width = 300;
                break;

            case "Cervidae":
                _id = "Cervidaetip";
                _html = "Deer have antlers that they shed according to the season, unlike horns which stay on for life. A couple of species also molt twice a year, usually around fall and summer. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Eulipotyphla":
                _id = "Eulipotyphlatip";
                _html = "These small mammals are generally insectivorous and herbivorous. Hedgehogs have quills made of keratin in hollow hair that fall out to be replaced by adult quills, like human teeth. Moles are designed for burrowing, with bad eye-sight, a superb sense of smell, and large claws. Shrews are smaller than mice with a pointed snout and have evolved to inhabit trees and water. Existed 40 million years ago.";
                _width = 300;
                break;

            case "Chiroptera":
                _id = "Chiropteratip";
                _html = "Bats are the only mammals that can fly, not counting gliding. Their wings are membrane held together by bony fingers, allowing them to fly quickly through the night with the help of their echolocation. They eat insects, fruit, small animals, and blood, requiring a lot of food since they burn so much energy having to fly. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Carnivora":
                _id = "Carnivoratip";
                _html = "These mammals have evolved to eat meat, instead of vegetation and small insects. They live all around the world, in almost every place imaginable. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Feliformiatip":
                _id = "Feliformia";
                _html = "These carnivorous animals are “cat-like”, with shorter snouts, less teeth, and have more arboreal species. The main difference with the other group of carnivores, Caniformes, is how their inner ear is arranged, with Feliformes having two and Caniformes having one. Existed 40 million years ago.";
                _width = 300;
                break;

            case "Felidae":
                _id = "Felidaetip";
                _html = "Cats are slender and muscular carnivores that mainly ambush hunters. They vary in sizes and have adapted to dozens of different environments from jungles to arid deserts. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Pantherinae":
                _id = "Pantherinaetip";
                _html = "These cats are differentiated from other felids by their ability to roar. They are, in general, larger than other cats and are the apex, or close to one, on their respective food webs. Existed 1o million years ago.";
                _width = 300;
                break;

            case "Felinae":
                _id = "Felinaetip";
                _html = "These fields aren’t able to roar and can only purr. These include cheetahs, caracals, jungle cats, domestic cats, cougars, lynxes, servals, and ocelots. They are generally smaller in size and tend to eat smaller prey. Existed 1o million years ago.";
                _width = 300;
                break;

            case "Hyaenidae":
                _id = "Hyaenidaetip";
                _html = "They have short bodies and are more built than other felids. They have strong jaws and eat carrion and are known for their vocal calls. Existed 20 million years ago.";
                _width = 300;
                break;

            case "Herpestidae":
                _id = "Herpestidaetip";
                _html = "These mammals are small with long tails bodies and short ears and legs and dig burrows. They are very agile and eat a variety of things such as insects, eggs, lizards, and carrion. Existed 20 million years ago.";
                _width = 300;
                break;

            case "Caniformia":
                _id = "Caniformiatip";
                _html = "These carnivores typically are more omnivorous and opportunistic when it comes to feeding. They also have longer jaws, more teeth, and an inner ear with only one chamber. Existed 40 million years ago.";
                _width = 300;
                break;

            case "Canidae":
                _id = "Canidaetip";
                _html = "These medium-sized mammals have slender snouts, long legs, and bushy tails and are adapted to chase prey and rip it apart with their teeth. They are quite social, forming intricate relationships with their pack. Existed 35 million years ago.";
                _width = 300;
                break;

            case "Ursidae":
                _id = "Ursidaetip";
                _html = "These large animals are heavily muscled, omnivorous, and are able to climb, swim, and run quite well. They don’t have very good senses of hearing or sight, however they have one of the best senses of smell and have excellent memories. Existed 35 million years.";
                _width = 300;
                break;

            case "Pinnipedia":
                _id = "Pinnipediatip";
                _html = "These marine mammals are well-adapted to life in the ocean, since they are agile in the water and have sight and hearing adapted to land and sea. They are all covered in hair, except for walruses, and have blubber to keep them warm in the water, usually near the polar regions. Existed 25 million years ago.";
                _width = 300;
                break;

            case "Musteloidea":
                _id = "Musteloideatip";
                _html = "These mammals are generally small, with long and slender bodies and thick fur and are usually solitary and nocturnal. They share their ability to prolong their pregnancies to give birth in more favorable conditions and live in a variety of habitats such as trees, plains, forests, rivers, and oceans. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Euarchontoglires":
                _id = "Euarchontoglirestip";
                _html = "There are very few shared physical traits between animals in this group, however, they share similar DNA sequences. However, there is little to no evidence otherwise. Existed 60 million years ago.";
                _width = 300;
                break;

            case "Glires":
                _id = "Glirestip";
                _html = "These mammals have their incisors grow continuously for their entire life. They have to wear their teeth down a lot to prevent from growing too long. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Lagomorpha":
                _id = "Lagomorphatip";
                _html = "These small mammals with large ears and strong back legs used to jump and run. They also have four upper incisors, compared to rodents who have only two. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Rodentia":
                _id = "Rodentiatip";
                _html = "These mammals have small limbs &  bodies and long tails. They thrive in almost all environments and make up for 40% of all mammal species. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Sciuromorpha":
                _id = "Sciuromorphatip";
                _html = "These mammals are small and have slender and agile bodies. Most of them are adept at climbing and flying squirrels are able to glide from tree to tree. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Hystricomorpha":
                _id = "Hystricomorphatip";
                _html = "Porcupines have modified hair made of keratin that act as spines to deter predators. Capybaras are the largest rodents and have webbed feet and thrive in water, however chinchillas can’t get wet since they have the densest fur of any animal. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Myomorpha":
                _id = "Myomorphatip";
                _html = "These rodents are quite small and are very good at gnawing on different materials. They are found across the world and usually feed on seeds. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Castorimorpha":
                _id = "Castorimorphatip";
                _html = "These species are quite different, with beavers being very well adapted to the water, with their webbed feet and a large paddle-like tail. Kangaroo rats, on the other hand, thrive in more open and drier environments and gophers burrow in soft ground to make tunnels. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Euarchonta":
                _id = "Euarchontatip";
                _html = "These mammals have been discovered to be related through molecular evidence. More DNA sequence analysis has cemented this group even further. Existed 55 million years ago.";
                _width = 300;
                break;

            case "Primates":
                _id = "Primatestip";
                _html = "These mammals have large brain-to-body ratios, color vision, dexterous hands, and a wide range of motion with their arms. They are the most social of all animals, forming groups of many different sizes and hierarchical formations. Existed 52 million years ago.";
                _width = 300;
                break;

            case "Strepsirrhini":
                _id = "Strepsirrhinitip";
                _html = "These primates are generally smaller, however, they have good night vision, sense of smell, and are able to produce their own vitamin C. They also have teeth specialized for grooming and are generally arboreal, tree-dwelling, and eat fruits, leaves, and insects. Existed 50 million years.";
                _width = 300;
                break;

            case "Lemuriformes":
                _id = "Lemuriformestip";
                _html = "Lemurs medium to small sized animals that live only in Madagascar and filled the wide variety of niches, roles, there. They have developed a plethora of adaptations such as, emit foul odors, large legs used to jump, tongues designed to eat nectar, and dominate the Madagascaran environment. Existed 2 million years.";
                _width = 300;
                break;

            case "Lorisiformes":
                _id = "Lorisiformestip";
                _html = "Lorises are small, nocturnal and tree-dwelling primates that live in forests and jungles in Southeast Asia. Bush Babies are small and agile creatures that are nocturnal and long tails and large ears. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Haplorrhini":
                _id = "Haplorrhinitip";
                _html = "These primates are generally larger and have lost the enzyme that allows them to produce vitamin C. They also rely more on vision, have larger brain-to-body ratios, and are able to produce a wider variety of facial expressions. Existed 50 million years ago.";
                _width = 300;
                break;

            case "Tarsiiformes":
                _id = "Tarsiiformestip";
                _html = "Tarsiers are small creatures that have adapted to climbing in the forests and jungles of Southeast Asia. They have extremely large eyes and good hearing. Their long tail and feet and hands allow them to climb and cling to vertically hanging vines. Existed 45 million years ago.";
                _width = 300;
                break;

            case "Simiiformes":
                _id = "Simiiformestip";
                _html = "These primate have large brains, relative to their size and in general. They also have shared internal changes to their eyes, ears, teeth, and feet. Existed 40 million years.";
                _width = 300;
                break;

            case "Platyrrhini":
                _id = "Platyrrhinitip";
                _html = "These primates inhabit areas in the Western hemisphere, the “new world” for European explorers. These are the only primates that can have prehensile tails and have a wide variety of behaviors and sizes. From spider monkeys to marmosets to tamarins and owl monkeys, these primates thrive in the trees and are usually omnivorous. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Catarrhini":
                _id = "Catarrhinitip";
                _html = "These primates inhabit the areas of Africa and Asia. They never have had prehensile tails and have downward facing nostrils and flat fingernails and toenails. Existed 37 million years ago.";
                _width = 300;
                break;

            case "Cercopithecidae":
                _id = "Cercopithecidaetip";
                _html = "These monkeys can be either terrestrial or arboreal, however, in general, they are opportunistic omnivores and have tails, unlike apes. Existed 30 million years ago.";
                _width = 300;
                break;

            case "Hominoidea":
                _id = "Hominoideatip";
                _html = "Apes are tailless primates that have more mobile shoulders and arms. Except for humans and gorillas, apes are quite arboreal and swing through trees. A few species are able to move bipedally and all of them have very complex and advanced cognitive abilities. Existed 20 million years ago.";
                _width = 300;
                break;
        }
        showTooltip(target, _id, _html, _width);
    }
});


/*var LUCA = document.getElementById("LUCA");

LUCA.onmouseover = function(){
    showTooltip(this, "LUCA", "It is the last organism that is the ancestor of every modern species. It appears to have been a single-celled organism, not that different from modern-day bacterium. Existed 3.5 to 3.8 million years ago.", 300)
};*/
