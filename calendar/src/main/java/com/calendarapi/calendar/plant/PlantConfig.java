package com.calendarapi.calendar.plant;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PlantConfig {

    @Bean
    CommandLineRunner plantCommandLineRunner(
            PlantRepository repository) {
        return args -> {
            Plant tomato = new Plant(
                    "Tomato",
                    "Solanum lycopersicum",
                    "some detailed notes about growing Tomatoes",
                    21,
                    13,
                    "full sun",
                    "https://i.ibb.co/sqn4Xqb/tomato.jpg"
            );

            Plant purpleCabbage = new Plant(
                    "Purple Cabbage",
                    "Brassica oleracea Capitata",
                    "Like other cabbage, it prefers cool weather and forms round, dense heads on top of short stalks.",
                    24,
                    12,
                    "full sun",
                    "https://i.ibb.co/Zmjs6yj/purplecabbage.jpg"
            );

            Plant carrot = new Plant(
                    "Carrot",
                    "Daucus carota",
                    "The carrot is a root vegetable. Spread 5cm apart.",
                    17,
                    21,
                    "full sun",
                    "https://i.ibb.co/Mgskv1D/carrot.jpg"
            );

            Plant broccoli = new Plant(
                    "Broccoli",
                    "Brassica oleracea",
                    "Broccoli has large flower heads known as \"crowns\" that are green to blue-green in color, grouped tightly together atop a thick stem, and surrounded by leaves. Broccoli resembles cauliflower, a different cultivar in its species. It thrives in cool weather.",
                    17,
                    16,
                    "full sun",
                    "https://i.ibb.co/G3fmfdX/broccoli.jpg"
            );

            Plant eggplant = new Plant(
                    "Eggplant",
                    "Solanum melongena",
                    "Eggplants commonly are egg-shaped with glossy black skin, but can come in a variety of other shapes and colors. They can be white, yellow, and pale to deep purple. Some are as small as goose eggs. ",
                    17,
                    12,
                    "full sun",
                    "https://i.ibb.co/6D3phzG/eggplant.jpg"
            );

            Plant cucumber = new Plant(
                    "Cucumber",
                    "Cucumis sativus",
                    "Cucumbers grow best in full sun but can do fine with 5 hours of sunlight per day.",
                    19,
                    12,
                    "full sun",
                    "https://i.ibb.co/CWzxjNs/cucumber.jpg"
            );

            Plant garlic = new Plant(
                    "Garlic",
                    "Allium sativum",
                    "There are many different varieties of garlic.",
                    32,
                    32,
                    "full sun",
                    "https://i.ibb.co/1vHjSNS/garlic.jpg"
            );

            Plant peas = new Plant(
                    "Peas",
                    "Pisum sativum",
                    "Peas will grow up to 6 feet tall or higher as vines in well-drained, rich soil. They are ready for harvesting about 60 to 70 days after planting in early spring.",
                    10,
                    32,
                    "full sun",
                    "https://i.ibb.co/FYDQS3z/peas.jpg"
            );

            Plant potato = new Plant(
                    "Potato",
                    "Solanum tuberosum",
                    "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae.",
                    null,
                    11,
                    "full sun",
                    "https://i.ibb.co/YD45PfN/potato.jpg"
            );

            Plant asparagus = new Plant(
                    "Asparagus",
                    "Asparagus officinalis",
                    "Spears grow quickly and may become too woody before you know it! Once an asparagus spear starts to open and have foliage, it's too tough for eating. Harvest spears when they reach 8 to 10 inches in height and between ½ and ¾ inch thick.",
                    null,
                    null,
                    "full sun",
                    "https://i.ibb.co/K0J1Yyj/asparagus.jpg"
            );

            Plant radish = new Plant(
                    "Radish",
                    "Raphanus sativus",
                    "The radish is an edible root vegetable of the family Brassicaceae that was domesticated in Asia prior to Roman times. Radishes are grown and consumed throughout the world, being mostly eaten raw as a crunchy salad vegetable with a pungent flavor.",
                    32,
                    5,
                    "full sun",
                    "https://i.ibb.co/bKQCXDT/radish.jpg"
            );

            Plant greenonion = new Plant(
                    "Green Onion (Scallion)",
                    "Allium cepa",
                    "Green onions are shallow-rooted and will grow in a wide range of soil types. They grow best in well-drained soils such as sandy loam, loam, and clay loam soils which tend to retain moisture. Sandy soils tend to dry quickly and require frequent irrigation.",
                    null,
                    10,
                    "full sun",
                    "https://i.ibb.co/85GG3YN/greenonion.jpg"
            );

            Plant artichoke = new Plant(
                    "Artichoke",
                    "Cynara scolymus",
                    "The globe artichoke, also known by the names French artichoke and green artichoke in the U.S., is a variety of a species of thistle cultivated as a food. The edible portion of the plant consists of the flower buds before the flowers come into bloom.",
                    null,
                    17,
                    "full sun",
                    "https://i.ibb.co/74FC6fh/artichoke.jpg"
            );

            Plant onion = new Plant(
                    "Yellow Onion",
                    "Allium cepa",
                    "A cool season crop.  Onions are one of the easiest vegetables to grow. They will grow in just about any type of soil as long as they get sunshine and the right amount of water, but they will grow best in soil that is loose and acidic.",
                    32,
                    13,
                    "full sun",
                    "https://i.ibb.co/Mhb4xfH/onion.jpg"
            );

            Plant bellpepper = new Plant(
                    "Bell Pepper",
                    "Capsicum annuum Group",
                    "Peppers are a tender, warm-season crop, so they typically need to be started indoors if grown from seed. Start seeds indoors 8-10 weeks before your last spring frost date. Bell peppers require a fairly long growing season (60 to 90 days).",
                    150,
                    10,
                    "full sun",
                    "https://i.ibb.co/KW2JjCt/bellpepper.jpg"
            );

            Plant corn = new Plant(
                    "Corn",
                    "Zea mays",
                    "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant produces ears that yield kernels or seeds, which are fruits.",
                    12,
                    12,
                    "full sun",
                    "https://i.ibb.co/j8Jrv1F/corn.jpg"
            );

            Plant spinach = new Plant(
                    "Spinach",
                    "Spinacia oleracea",
                    "Spinach is a leafy green flowering plant native to central and western Asia.",
                    10,
                    5,
                    "full sun",
                    "https://i.ibb.co/bPfKFwG/spinach.jpg"
            );

            repository.saveAll(
                    List.of(artichoke, asparagus, bellpepper, broccoli, carrot, corn, cucumber, eggplant, garlic, greenonion, onion, peas, potato, purpleCabbage, radish, tomato, spinach)
            );
        };
    }
}
