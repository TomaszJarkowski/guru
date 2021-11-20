import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { fetchArticles, selectArticlesState } from '../../store/articles/articlesSlice';
import { StatusFetch } from '../../store/products/productsSlice';
import { Loader } from '../UI/Loader/Loader';
import { Empty } from '../UI/Empty/Empty';
import { Error } from '../UI/Error/Error';
import { Text } from '../UI/Text/Text';

import './ArticleContent.scss';

export const ArticleContent: React.FC = () => {
    const dispatch = useDispatch();
    const { articles, articlesFetch, errorMessage } = useSelector(selectArticlesState);
    const params: { id: string } = useParams();

    useEffect(() => {
        if (!articles.length) {
            dispatch(fetchArticles());
        }
    }, []);

    const index = articles.findIndex((obj) => obj.id === parseInt(params.id));

    if (articlesFetch === StatusFetch.FAIL) {
        return <Error>{errorMessage}</Error>;
    }

    return (
        <div className='ArticleContent'>
            {articlesFetch === StatusFetch.LOADING ? (
                <div className='loader'>
                    <Loader />
                </div>
            ) : (
                <>
                    {articles[index] ? (
                        <div className='article'>
                            <h2 className='article__title'>{articles[index].title}</h2>
                            <img
                                className='article__img'
                                src={articles[index].imgs[0].src}
                                alt='article img'
                            />
                            <Text classNames='article__description'>
                                When asked to think of fishing in Scotland, one would be forgiven
                                for automatically picturing scenes of tree-lined rivers with figures
                                dressed in Tweed, beautifully and artistically casting a fly line
                                across a Salmon filled pool. Perhaps a drifting boat occupied by a
                                Ghillie and their client, casting to a rising trout on an isolated
                                hill loch. Another may imagine a charter boat on the North sea
                                filled with optimistic anglers in search of an illusive cod. Or even
                                a bivvy set behind a trio of rods, on a cold crisp winters morning,
                                specifically placed to maximise the chances of capturing that ever
                                sought after monster pike. However, as well as the ever-popular
                                Game, Sea and Predator fishing, there is another angling scene
                                growing in popularity north of the border. The art of coarse
                                fishing, with numerous methods, techniques, tricks and tackle is
                                making a mark in Scotland. However, those new to the many
                                disciplines of this angling aspect can often feel daunted and
                                occasionally deterred by the seemingly endless amount of tackle and
                                hardware that is apparently necessary to be successful in this
                                field. Indeed, It can often feel like a minefield of overwhelming
                                information and beguiling marketing. A few years ago now I made the
                                decision to step out of my comfort zone and broaden my angling
                                experiences in a bid to learn new skills and methods and ultimately
                                catch more fish. I had previously dabbled in coarse fishing with
                                limited success but the bulk of my angling history had been very
                                much centred around game and predator fishing. Since taking this
                                step I have uncovered a wealth of opportunities, succeeded in what I
                                set out to do and yes, caught more fish. Although the market is
                                saturated with newfangled tackle, novelties and toys, which can be
                                great fun to explore once you gain some confidence and get a feel
                                for what these styles are all about, getting started and doing well
                                couldn’t be easier. One of the many joys of coarse fishing is the
                                variety of opportunities that are on offer. Not only the variety of
                                fish species that can be targeted but the variety of venues that
                                hold the possibility of great sport, from huge lochs to the tiniest
                                of ponds and everything in-between. With such a vast array of venues
                                and species available to the coarse angler, one may believe that a
                                vast array of gear is essential. Fear not, it doesn’t have to be
                                that way as there is one method that, with slight adjustments, can
                                tackle almost any venue, is fantastic in targeting most species and
                                has rapidly become a firm favourite of mine. Feeder fishing. It’s
                                the ultimate all-round coarse fishing method that can be deployed on
                                big lochs, reservoirs, slow-moving rivers, canals, ponds and
                                commercial fisheries to great success and is incredibly easy to get
                                to grips with. It is an ideal method to target Roach, Bream, Tench,
                                Carp, Perch, Chub, Dace and many others. This method gets its name
                                from the piece of terminal tackle which effectively replaces a
                                ledger and is designed to hold ground bait, pellets, maggots and
                                other free offerings throughout each cast, depositing it in the
                                immediate vicinity of your hook bait. These feeders come in many
                                forms and sizes, each of which are better suited to specific venues
                                or species. Cage feeders, Maggot feeders and Method feeders are some
                                of the most popular and these three will easily cover most venues
                                and species. A cage feeder is designed to hold a ground bait mix,
                                perhaps infused with other bits and pieces such as Hemp, Corn and
                                maggots and is perfect for fishing larger venues as the cage
                                structure holds the bait well when casting longer distances. Ground
                                bait mixes are best used when targeting shoaling species such as
                                Roach and Bream as regular casts will keep your swim topped up with
                                a large amount of tasty particles, which will help hold a large
                                number of fish exactly where you want them. Accuracy is key here, as
                                you want to hit the same mark cast after cast. Maggot feeders are
                                similar and will cast like a bullet, delivering a feeder full of
                                maggots directly to where you want them. These are ideal for
                                targeting species that don’t form huge shoals but still have a fair
                                appetite such as Perch, although they can also be used to target
                                bigger shoals assuming casts are made regularly. Both Cage and
                                Maggot feeders are also perfect for fishing slow moving rivers for
                                species such as Dace and Chub and maggot feeders in particular,
                                although not exactly traditional, are frequently used in Scotland’s
                                deep glacial lochs for Brown Trout and.
                            </Text>
                        </div>
                    ) : (
                        <Empty>The article with this ID does not exist</Empty>
                    )}
                </>
            )}
        </div>
    );
};
