/*
 * GMSFacade
 */
package business;

import data.GameDAO;
import java.util.List;
import java.util.stream.Collectors;


/**
 *
 * @author ruicouto, jfc
 */
public class GMSFacade {
    public static List<Game> listGames() {
        List<Game> games = GameDAO.list();
        return games;
    }

    public static List<Game> listGames(int year) {
        List<Game> games = GameDAO.list().stream()
                .filter(g -> g.getYear() == year)
                .collect(Collectors.toList());
        return games;
    }


    public static List<Integer> getYears() {
        List<Integer> games = GameDAO.getYears();
        return games;
    }

    public static List<String> getPlaforms() {
        List<String> games = GameDAO.getPlatforms();
        return games;
    }
}
