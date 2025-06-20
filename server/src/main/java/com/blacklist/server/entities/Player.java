package com.blacklist.server.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@Setter
@Entity
@Table(name = "players")
public class Player {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "summoner_name", nullable = false, length = 100)
    private String summonerName;

    @Column(name = "summoner_tag", nullable = false, length = 100)
    private String summonerTag;

    @Lob
    @Column(name = "description")
    private String description;

    @Lob
    @Column(name = "ban_duration", nullable = false)
    private String banDuration;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_name", referencedColumnName = "username")
    private com.blacklist.server.entities.User userName;

}